using commonInterfaces.dbDataTypes;
using components.workspace;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using reactBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Utilities
{
    public enum PermissionType { view, edit, delete }

    public struct ProjectAccessPermission
    {
        public string userId { get; set; }
        public Dictionary<string, Dictionary<string, string[]>> projectRestrictions { get; set; }
    }

    public static class UtilityExtensions
    {
        /// <summary>
        /// Shuffles an array
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="items"></param>
        public static T[] Shuffle<T>(this T[] items)
        {
            Random rand = new Random();

            // For each spot in the array, pick
            // a random item to swap into that spot.
            for (int i = 0; i < items.Length - 1; i++)
            {
                int j = rand.Next(i, items.Length);
                T temp = items[i];
                items[i] = items[j];
                items[j] = temp;
            }

            return items;
        }

        public static IEnumerable<IEnumerable<T>> toChunks<T>(this T[] array, int size)
        {
            for (var i = 0; i < (float)array.Length / size; i++)
            {
                yield return array.Skip(i * size).Take(size);
            }
        }




        static public WorkspaceModel ensureWorkspaceAdmin(this ControllerBase controller,
            workspaceResolver.ILegacyResolverComon resolver, bool returnNullIfNot = false)
        {
            var user = controller.currentLoggedonUser();
            var currentWorkspace = resolver.getCurrentWorkspace();

            if (currentWorkspace.isAdmin(user))
            {
                return currentWorkspace;
            }

            if (returnNullIfNot)
                return null;

            throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);


        }

        public static void EnsurePageHolderAccess(this ControllerBase controller,
            PageHolderModel cart,
            IWorkspaceResolver resolver, commonInterfaces.IRevDatabase revDb,
            ILogger logger, PermissionType permissionType
            )
        {
            var user = controller.currentLoggedonUser();

            if (cart is ScanBatchModel)
            {
                var scanBatch = cart as ScanBatchModel;

                if (user != scanBatch.owner &&
                    null == scanBatch.authorizedUsers && !scanBatch.authorizedUsers.Contains(user))
                    throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);
            }
            else if (cart is DocumentModel)
            {
                ensureProjectAccess(controller, resolver, revDb, logger,
                        new[] { (cart as DocumentModel).projectId },
                        permissionType);

            }

        }




        public static ProjectAccessPermission ensureProjectAccess(this ControllerBase controller,
            workspaceResolver.ILegacyResolverComon resolver, commonInterfaces.IRevDatabase revDb,
            ILogger logger,
            string[] projectId, PermissionType permissionType)
        {
            var userId = controller.currentLoggedonUser();

            if (null != controller.ensureWorkspaceAdmin(resolver, true))
            {
                logger.LogDebug("ensureProjectAccess: user is owner");
                return new ProjectAccessPermission { userId = userId, projectRestrictions = null };
            }


            var projcetsWithPermissionsQ = revDb.getQueryable<ProjectModel>()
                .Where(p => projectId.Contains(p.id));

#if _DEBUG
			logger.LogTrace($"ensureProjQuery ={projcetsWithPermissionsQ.ToString()}");
#endif

            var projcetsWithPermissions = projcetsWithPermissionsQ
                .ToArray()
                .Where(p => null != p.permissions && p.permissions.Count() > 0)
                .ToArray();

            if (projcetsWithPermissions.Count() == 0)
            {
                logger.LogDebug("ensureProjectAccess: no projects with permissions");
                return new ProjectAccessPermission { userId = userId, projectRestrictions = null };
            }

            var userRoles = revDb.getQueryable<WorkspaceUserModel>()
                .Where(wu => wu.userId == userId)
                .Single()
                .roles;

            if (userRoles.Count() == 0)
            {
                logger.LogDebug($"originFromURLensureProjectAccess: user {userId} has no roles");
                throw new ExceptionWithCode("Access denied", System.Net.HttpStatusCode.Forbidden);
            }

            var restrictions = projcetsWithPermissions.Select(project =>
            {
                KeyValuePair<string, PermissionsModel>[] permittingRoles;
                switch (permissionType)
                {
                    case PermissionType.view:
                        permittingRoles = project.permissions.Where(p => userRoles.Contains(p.Key) && p.Value.canView).ToArray();
                        break;
                    case PermissionType.edit:
                        permittingRoles = project.permissions.Where(p => userRoles.Contains(p.Key) && p.Value.canEdit).ToArray();
                        break;
                    case PermissionType.delete:
                        permittingRoles = project.permissions.Where(p => userRoles.Contains(p.Key) && p.Value.canDelete).ToArray();
                        break;
                    default:
                        throw new Exception("Permission type not supported");
                }


                if (permittingRoles.Count() > 0)
                {
                    logger.LogDebug($"originFromURLensureProjectAccess: user - {userId}  role - {permittingRoles[0].Key} can {permissionType} project {project.name}");

                    Dictionary<string, string[]> restrictedTo = null;
                    var thisrestrictions = permittingRoles
                                .Where(p => null != p.Value && null != p.Value.restrictedTo && p.Value.restrictedTo.Count() > 0)
                                .SelectMany(p => p.Value.restrictedTo)
                                .ToArray();

                    if (thisrestrictions.Count() > 0)
                    {
                        restrictedTo = new Dictionary<string, string[]>();
                        foreach (var r in thisrestrictions)
                        {
                            if (null == r.Value  /* we want empty arrays here|| r.Value.Count() == 0*/)
                                continue;

                            if (restrictedTo.ContainsKey(r.Key))
                                restrictedTo[r.Key] = restrictedTo[r.Key].Concat(r.Value).Distinct().ToArray();
                            else
                                restrictedTo[r.Key] = r.Value;
                        }
                    }


                    return new { projectId = project.id, restrictedTo };
                }

                throw new ExceptionWithCode("Access denied", System.Net.HttpStatusCode.Forbidden);
            })
            //.Where(r => null != r)
            .ToDictionary(k => k.projectId, v => v.restrictedTo);
            ;

            return new ProjectAccessPermission { userId = userId, projectRestrictions = restrictions };

        }



        /// <summary>
        /// a Trick to know what is my current URL. We figure out origin by removing the known URL part
        /// </summary>
        /// <param name="controller"></param>
        /// <param name="currentKnownRoute">the router from calling action</param>
        /// <returns></returns>
        public static string originFromURL(this ControllerBase controller, string currentKnownRoute, ILogger logger, string overrideUrlScheme = null)
        {

            //[7] = {[Referer, https://coolme.testrev.com:8079/]}
            var refererVals = controller.Request.Headers["Referer"];
            var referer = refererVals.FirstOrDefault();

            logger.LogDebug($"originFromURL referer -> {referer}");


            if (string.IsNullOrWhiteSpace(referer))
            {
                referer = controller.Request.Headers["origin"].ToArray().FirstOrDefault();

                logger.LogDebug($"originFromURL using ORIGIN referer -> {referer}");
            }

            var fixedurlScheme = overrideUrlScheme;

            if (!string.IsNullOrEmpty(referer))
            {
                var refUrl = new Uri(referer);
                var urlScheme = refUrl.Scheme;
                var urlPort = refUrl.Port;

                if (!string.IsNullOrWhiteSpace(fixedurlScheme))
                {
                    logger.LogDebug($"originFromURL using fixedurlScheme -> {fixedurlScheme}");

                    var splittedScheme = fixedurlScheme.Split(':');

                    if (splittedScheme.Length >= 2)
                    {
                        urlScheme = splittedScheme[0];
                        urlPort = int.Parse(splittedScheme[1]);
                    }
                    else
                    {
                        urlScheme = fixedurlScheme;
                        urlPort = 80;
                    }

                }


                var ret = $"{urlScheme}://{refUrl.Host}";

                if (refUrl.Port != 80)
                    ret = $"{ret}:{urlPort}";

                logger.LogDebug($"originFromURL ret -> {ret}");

#if DEBUG
				//var debugTmpUrl = "http://host.docker.internal:19000";
                var debugTmpUrl = "http://localhost:9000";
                return debugTmpUrl;
#endif

                return ret.TrimEnd('/');
            }
            else
            {
                logger.LogDebug("originFromURL Referer is null. using RAW");
            }


            //http://localhost:56393/api/nativeInstaller/5b13fa4759716837787eca96
            var rawURl = Microsoft.AspNetCore.Http.Extensions.UriHelper.GetDisplayUrl(controller.Request);

            logger.LogDebug($"originFromURL rawURl -> {rawURl}");

            //changing a bit here
            var myindex = rawURl.IndexOf(currentKnownRoute);

            //if not found we need to fix our reverse proxy
            if (-1 != myindex)
            {
                logger.LogDebug($"originFromURL myindex -> {myindex}");

                //                throw new Exception($"invalid forwarding for {currentKnownRoute}");
                var myOrigin = rawURl.Substring(0, myindex);
                myOrigin = myOrigin.TrimEnd(new[] { '/' });

                logger.LogDebug($"originFromURL myOrigin -> {myOrigin}");
                return myOrigin;
            }

            var fromHost = $"{controller.Request.Scheme}://{controller.Request.Host}";

            logger.LogDebug($"originFromURL fromHost -> {fromHost}");

            return fromHost;

        }

        public static String clientLocation(this ControllerBase controller)
        {
            return (controller.HttpContext.Connection.RemoteIpAddress ?? System.Net.IPAddress.Parse("0.0.0.0")).ToString();
        }

        /// <summary>
        /// gets the current logged on User Id
        /// </summary>
        /// <param name="controller"></param>
        /// <returns></returns>
        public static string currentLoggedonUser(this ControllerBase controller)
        {
            return currentLoggedonUser(controller.User);
        }

        public static string currentLoggedonUser(this Microsoft.AspNetCore.Http.HttpContext context, bool reurnNullifNotAuthenticated = false)
        {
            return currentLoggedonUser(context.User, reurnNullifNotAuthenticated);
        }

        public static string currentLoggedonUser(this ClaimsPrincipal user, bool reurnNullifNotAuthenticated = false)
        {
            if (!user.Identity.IsAuthenticated)
            {
                if (reurnNullifNotAuthenticated)
                    return null;

                throw new ExceptionWithCode("User not authenticated");
            }

            var currentUserLogin = user.FindFirst(ClaimTypes.NameIdentifier).Value;
            //return _db.getQueryable<commonInterfaces.dbDataTypes.User>().Single(u => u.Login == currentUserLogin);
            return currentUserLogin;
        }

    }
}
