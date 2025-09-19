using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.revLogin;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using reactBase;
using Utilities;
using MongoDB.Driver;


namespace components.permissions
{
    [Route("api/[controller]")]
    [Authorize]
    public class PermissionsController : Controller
    {
        readonly ITaskSignerservice _signer;
        readonly commonInterfaces.IRevDatabase _revDb;
        readonly IWorkspaceResolver _resolver;
        private readonly ILogger _logger;
        readonly commonInterfaces.IRevAuthDatabase _authDb;
        readonly IEmailSenderService _mailsender;
        readonly IProvisionAuthProvider _provisioner;
        IConfiguration configuration;
        /// <summary>
        /// This install is in appliance mode
        /// </summary>
        readonly bool _usingApplianceAuth;

        public PermissionsController(
        commonInterfaces.IRevDatabase revDb, commonInterfaces.IRevAuthDatabase authDb,
        IWorkspaceResolver resolver,
        ITaskSignerservice signer,
        IEmailSenderService mailsender,
        IConfiguration _configuration,
        IProvisionAuthProvider provisioner,
        ILogger<PermissionsController> logger)
        {
            _signer = signer;
            _revDb = revDb;
            _resolver = resolver;
            _logger = logger;
            _authDb = authDb;
            _mailsender = mailsender;
            _provisioner = provisioner;
            configuration = _configuration;
            _usingApplianceAuth = !_configuration.GetValue<bool>("authentication:useAuth0");

        }

        [HttpGet("Encrypt")]
        public string Encrypt([FromQuery] string text)
        {
            var result = _signer.EncryptData(text);

            return result;
        }


        /// <summary>
        /// returns all capabilities of the signed in user
        /// The first place a clinet has to call before it knows what to do 
        /// </summary>
        /// <returns></returns>
        [HttpGet("myRoles")]
        public async Task<MyRolesModel> userRoles()
        {
            var userId = this.currentLoggedonUser();
            var workspceUser = _revDb.getQueryable<WorkspaceUserModel>().SingleOrDefault(u => u.userId == userId);

            if (null == workspceUser)
                return null;

            workspceUser.lastSignedIn = DateTime.Now;
            workspceUser = await _revDb.AddorUpdateAsync(workspceUser);

            var ret = new MyRolesModel
            {
                isAdmin = null != this.ensureWorkspaceAdmin(_resolver, true),
                roles = (null != workspceUser && null != workspceUser.roles) ? workspceUser.roles : new string[] { }
            };

            return ret;
        }

        [HttpGet("users")]
        public async Task<UserEditModel[]> getUsers()
        {
            var currentWorkspace = await ensureOwnerUserExistsAsync();

            var userCOllection = _authDb.getCollection<User>();

            //users in Workspace Database
            var usersInWkSpcDb = _revDb.getQueryable<WorkspaceUserModel>().ToArray();

            var userNamesInWkSpcDb = usersInWkSpcDb.Select(u => u.userId).ToArray();

            //get all the users for this workspace
            var workspaceUsersMap = (await userCOllection.Find(u => userNamesInWkSpcDb.Contains(u.UserName)).ToListAsync())
                .Select(u => new { u.UserName, details = new { u.emailaddress } })
                .ToArray()
                .ToDictionary(k => k.UserName, v => v.details);


            var admins = currentWorkspace.admins ?? new string[] { };

            var ret = usersInWkSpcDb.Select(u => new UserEditModel
            {
                workspaceUser = u,
                email = workspaceUsersMap.ContainsKey(u.userId) ? workspaceUsersMap[u.userId].emailaddress : u.invitationEmail?.emailTo,
                isAdmin = admins.Contains(u.userId),

            }).ToArray();

            var userNamestoAddedToWkSpcDb = currentWorkspace.users.Where(userName => !userNamesInWkSpcDb.Contains(userName)).ToArray();



            if (userNamestoAddedToWkSpcDb.Count() > 0)
            {
                //This method is also resposible for adding Users details to the workspace table
                _logger.LogInformation($"getUsers: found {userNamestoAddedToWkSpcDb.Count()} workspace only users, Creating in revDb");

                var authUsers = await Task.WhenAll((await userCOllection.Find(u => userNamestoAddedToWkSpcDb.Contains(u.UserName))
                    .ToListAsync())
                    .Select(async u =>
                    {
                        var newUserName = u.preferredName ?? u.emailaddress ?? u.UserName;

                        var user = usersInWkSpcDb
                        .Where(um => um.id == newUserName)
                        .FirstOrDefault();

                        if (null != user)
                        {
                            _logger.LogWarning($"user : {user} exists in WorkspaceUserModel with userId :{user.userId}");
                            Debug.Assert(false, "should never be here. Something is worng with userName => !userNamesInWkSpcDb.Contains(userName)");
                        }
                        else
                        {

                            user = new WorkspaceUserModel
                            {

                                isVaccant = false,
                                userId = u.UserName,
                                roles = null
                            };

                            _logger.LogInformation($"adding user : {user} to WorkspaceUserModel with userId :{user.userId}");

                            user = await _revDb.AddorUpdateAsync(user, newUserName);
                        }

                        return new UserEditModel
                        {
                            workspaceUser = user,
                            email = u.emailaddress,
                            prefferedName = u.preferredName
                        };


                    })
                    .ToArray());

                ret = ret.Concat(authUsers).ToArray();

            }

            var returnsWithNoEmail = ret.Where(r => string.IsNullOrWhiteSpace(r.email)).ToArray();

            var usersIdsWithNoEmail = returnsWithNoEmail.Select(r => r.workspaceUser.userId).ToArray();
            _logger.LogDebug($"found userid with no email -> {string.Join(",", usersIdsWithNoEmail)}");

            var usersWithNoEmail = await userCOllection.Find(u => usersIdsWithNoEmail.Contains(u.UserName)).ToListAsync();

            var idsToLookFor = usersWithNoEmail.SelectMany(u => new[] { u.UserName, u.importedFromAuth0 }).Where(id => !string.IsNullOrWhiteSpace(id)).ToArray();

            var foundInAuth0 = (await _authDb.db.GetCollection<Auth0User>(Auth0User.COLLECTION_NAME).Find(u => idsToLookFor.Contains(u.Id)).ToListAsync())
                .ToDictionary(key => key.Id, value => value);

            foreach (var r in returnsWithNoEmail)
            {
                Auth0User auth0User = null;

                if (foundInAuth0.ContainsKey(r.workspaceUser.userId))
                {
                    auth0User = foundInAuth0[r.workspaceUser.userId];
                    _logger.LogDebug($"Auth0 user found for userId : {r.workspaceUser.userId}");
                }
                else
                {
                    var importedId = usersWithNoEmail.SingleOrDefault(u => u.UserName == r.workspaceUser.id)?.importedFromAuth0;

                    if (!string.IsNullOrWhiteSpace(importedId) && foundInAuth0.ContainsKey(importedId))
                    {
                        auth0User = foundInAuth0[importedId];
                        _logger.LogDebug($"Auth0 user found for userId : {importedId}");
                    }
                    else
                    {
                        _logger.LogDebug($"No Auth0 user found for userId : {importedId}");
                    }

                }

                if (null != auth0User)
                {
                    _logger.LogDebug($"updating user {r.workspaceUser.userId} from auth0 {auth0User.Id}");

                    r.email = auth0User.Email;

                    var updater = Builders<User>.Update.Set(u => u.emailaddress, auth0User.Email);

                    if (string.IsNullOrWhiteSpace(r.prefferedName) && !string.IsNullOrWhiteSpace(auth0User.Name))
                    {
                        r.prefferedName = auth0User.Name;

                        updater = updater.Set(u => u.preferredName, auth0User.Name);
                    }

                    var updated = await userCOllection.UpdateOneAsync(u => u.UserName == r.workspaceUser.userId, updater);

                    if (!updated.IsAcknowledged)
                        throw new Exception("mongo did not ack");
                }

            }

            return ret;
        }


        async Task<WorkspaceModel> ensureOwnerUserExistsAsync()
        {
            var currentWorkspace = this.ensureWorkspaceAdmin(_resolver);
            var userId = this.currentLoggedonUser();

            //if this user is not listed add this user
            if (null == _revDb.getQueryable<WorkspaceUserModel>()
                .Where(u => u.userId == userId)
                .SingleOrDefault()
                )
            {
                if (userId == currentWorkspace.ownerUser)
                {
                    _logger.LogDebug($"updateWorkspaceUser: adding owner user {userId} to workspaceusers");
                    await _revDb.AddorUpdateAsync(new WorkspaceUserModel
                    {
                        userId = userId
                    }, WORKSPACE_OWNER);

                }
                else
                {
                    if (_usingApplianceAuth)
                    {
                        await _revDb.AddorUpdateAsync(new WorkspaceUserModel
                        {
                            userId = userId
                        }, userId);

                    }
                    else
                    {
                        throw new Exception("NON Owner users should be always present. Failed to establish User relationships");
                    }
                }


            }

            return currentWorkspace;
        }

        [HttpDelete("user/{encodedId}")]
        public async Task DeleteUser(string encodedId)
        {
            if (string.IsNullOrWhiteSpace(encodedId))
                throw new ArgumentNullException(nameof(encodedId));

            var id = Uri.UnescapeDataString(encodedId);

            _logger.LogTrace($"DeleteUser entered id :{id}");
            if (id.Trim() == WORKSPACE_OWNER)
                throw new ExceptionWithCode($"user name cannot be {WORKSPACE_OWNER}");

            var currentWorkspace = this.ensureWorkspaceAdmin(_resolver);

            var exisitingQ = await _revDb.getCollection<WorkspaceUserModel>()
                    .Find(u => u.id == id)
                    .SingleAsync();

            var workspaceCOllection = _authDb.getCollection<WorkspaceModel>();

            var done = await workspaceCOllection.UpdateOneAsync(w => w.id == currentWorkspace.id && null != w.admins && w.admins.Contains(exisitingQ.userId),
                Builders<WorkspaceModel>.Update.Pull(w => w.admins, exisitingQ.userId));

            if (!done.IsAcknowledged)
                throw new Exception("Mongo failed to Ack");

            done = await workspaceCOllection.UpdateOneAsync(w => w.id == currentWorkspace.id && null != w.users && w.users.Contains(exisitingQ.userId),
                Builders<WorkspaceModel>.Update.Pull(w => w.users, exisitingQ.userId));

            if (!done.IsAcknowledged)
                throw new Exception("Mongo failed to Ack");

            await _revDb.DeleteAsync<WorkspaceUserModel>(new[] { id });

            var authUserCollection = _authDb.getCollection<User>();

            var userQ = authUserCollection.Find(u => u.UserName.ToLower() == id.ToLower() || u.emailaddress.ToLower() == id.ToLower()).SingleOrDefault();

            await authUserCollection.DeleteOneAsync(u => u.UserName.ToLower() == id.ToLower());

        }


        readonly static string WORKSPACE_OWNER = "workspace_owner";
        /// <summary>
        /// updates user roles. if new user then creates a URL that is used to invite new user to join the workspace
        /// </summary>
        /// <returns>maps of user.id and urlinvitations</returns>
        [HttpPost("user")]
        public async Task<UserEditModel[]> updateWorkspaceUser([FromBody] UserEditModel[] reqList, [FromQuery] bool sendMeaCopy = false)
        {
            _logger.LogTrace($"updateWorkspaceUser entered");

            var currentWorkspace = await ensureOwnerUserExistsAsync();

            var userCollection = _authDb.getCollection<User>();

            var workspaceUserCollection = _revDb.getCollection<WorkspaceUserModel>();

            string bCCEmailTo = null;
            if (sendMeaCopy)
            {
                var loggedOnUserName = this.currentLoggedonUser();
                var dbUser = await userCollection.Find(u => u.UserName == loggedOnUserName).SingleAsync();
                if (String.IsNullOrWhiteSpace(dbUser.emailaddress))
                    throw new ExceptionWithCode(
                        "Your email address is not configured. Please enter your email address in your profile before sending emails",
                        System.Net.HttpStatusCode.ServiceUnavailable,
                        "email not set"
                        );

                bCCEmailTo = dbUser.emailaddress;
            }


            //Update admin
            {

                if (!WorkspacesController.isCustomDomainName(currentWorkspace.name))
                {
                    throw new ExceptionWithCode("Please customize your workspace name");
                }

                {
                    var adminNickNames = reqList.Where(u => u.isAdmin).Select(u => u.workspaceUser.id);
                    var workspaceUsers = await workspaceUserCollection.Find(u => true).ToListAsync();

                    var adminUserIds = workspaceUsers
                        .Where(u => !u.isVaccant && adminNickNames.Contains(u.id))
                        .Select(u => u.userId)
                        .ToArray();

                    var missingAdmins = null == currentWorkspace.admins ? adminUserIds : adminUserIds.Where(id => !currentWorkspace.admins.Contains(id)).ToArray();
                    var workspaceColletion = _authDb.getCollection<WorkspaceModel>();

                    if (missingAdmins.Length > 0)
                    {
                        _logger.LogDebug($"adding {string.Join(",", missingAdmins)} to admin list");

                        var filter = null == currentWorkspace.admins ? Builders<WorkspaceModel>.Update.Set(w => w.admins, missingAdmins) : Builders<WorkspaceModel>.Update.PushEach(w => w.admins, missingAdmins);
                        var updated = await workspaceColletion.UpdateOneAsync(w => w.id == currentWorkspace.id, filter);

                        if (!updated.IsAcknowledged)
                            throw new Exception("mngo failed to ack");
                    }
                    else
                    {
                        _logger.LogDebug("no missing admins");
                    }


                    adminNickNames = reqList.Where(u => !u.isAdmin).Select(u => u.workspaceUser.id);

                    adminUserIds = workspaceUsers
                        .Where(u => adminNickNames.Contains(u.id))
                        .Select(u => u.userId)
                        .ToArray();

                    if (null != currentWorkspace.admins && adminUserIds.Length > 0)
                    {

                        _logger.LogDebug($"removing {string.Join(",", adminUserIds)} from admin list");

                        var updated = await workspaceColletion.UpdateOneAsync(w => w.id == currentWorkspace.id,
                            Builders<WorkspaceModel>.Update.PullAll(w => w.admins, adminUserIds));

                        if (!updated.IsAcknowledged)
                            throw new Exception("mongo failed to ack");
                    }
                    else
                    {
                        _logger.LogDebug("no admins to remove");
                    }

                }
            }

            await Task.WhenAll(reqList.Select(async req =>
            {
                var workspaceUser = req.workspaceUser;
                /*var isEmailAddr = Regex.IsMatch(workspaceUser.id, @"[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+");

                if (!isEmailAddr)
                {
                    //throw new ExceptionWithCode($"Username should be valid email address");
                }*/
                var existing = await workspaceUserCollection.Find(u => u.id == workspaceUser.id).SingleOrDefaultAsync();

                if (workspaceUser.id.Trim() == WORKSPACE_OWNER)
                {
                    if (existing != null)
                    {
                        if (null != existing && existing.phoneNumber != workspaceUser.phoneNumber)
                        {
                            await workspaceUserCollection.UpdateOneAsync(u => u.id == workspaceUser.id,
                                Builders<WorkspaceUserModel>.Update.Set(u => u.phoneNumber, workspaceUser.phoneNumber));
                        }
                        if (null != existing && existing.fullName != workspaceUser.fullName)
                        {
                            await workspaceUserCollection.UpdateOneAsync(u => u.id == workspaceUser.id,
                                Builders<WorkspaceUserModel>.Update.Set(u => u.fullName, workspaceUser.fullName));
                        }
                    }

                    else
                    {
                        throw new ExceptionWithCode($" {WORKSPACE_OWNER} not found ");
                    }


                    return;

                }

                if (null != existing)
                {
                    workspaceUser.userId = existing.userId;
                }
                else
                {
                    workspaceUser.id = workspaceUser.userId = req.email ?? workspaceUser.id;
                }

                if (string.IsNullOrWhiteSpace(workspaceUser.userId))
                {
                    throw new Exception("workspaceUser.userId cannot be empty");
                }

                var updated = await workspaceUserCollection.ReplaceOneAsync(u => u.userId == workspaceUser.userId, workspaceUser, new UpdateOptions
                {
                    IsUpsert = true
                });

                if (!updated.IsAcknowledged)
                    throw new Exception("mongo did not ack");

                {
                    //ensure user is in users field
                    var done = await _authDb.getCollection<WorkspaceModel>().UpdateOneAsync(w =>
                        w.id == currentWorkspace.id && !(w.users.Contains(workspaceUser.userId) || w.admins.Contains(workspaceUser.userId)),
                        Builders<WorkspaceModel>.Update.Push(w => w.users, workspaceUser.userId));

                    if (!done.IsAcknowledged)
                        throw new Exception("mongo did not ack");

                    _logger.LogDebug($"pushed {done.ModifiedCount} users to users array");

                }

                if (req.inviteToJoin)
                {
                    var provisioned = await _provisioner.ProvisionUserAsync(req.email, existing?.userId, workspaceUser.userId);

                    var joinInvitation = new JoinInvitationModel
                    {
                        userId = workspaceUser.id,
                        nickName = provisioned.prefferedName,
                        workspace = currentWorkspace.name
                    };

                    if (null != provisioned)
                    {
                        workspaceUser = await _provisioner.handleJoinInvitation(joinInvitation, _revDb, provisioned.userName);

                        await SendMail(joinInvitation, req.email, bCCEmailTo, provisioned);
                    }

                    workspaceUser.invitationEmail = new InvitationEmailModel
                    {
                        sentAt = DateTime.Now,
                        emailTo = req.email
                    };
                    workspaceUser = await _revDb.AddorUpdateAsync(workspaceUser);


                }

            }));

            return await getUsers();

        }

        async Task SendMail(JoinInvitationModel req, string toEmail, string bCCEmail, ProvisionedResults provisioData)
        {
            var invitation = JsonConvert.SerializeObject(req);

            var hash = _signer.createSignedHash(invitation);
            var origin = this.originFromURL("/api/permissions", _logger);


            var text = $"Hello {req.nickName}\nThe administrator for Rev Workspace {req.workspace} has invited you to join their REV workspace {origin}\n";

            if (null != provisioData)
            {
                if (!string.IsNullOrWhiteSpace(provisioData.resetPin))
                {
                    text += ("\n You can choose to sign in using following credentials\n"
                    + $"\nUser name: {provisioData.email}"
                    + $"\nA new password of your choice"
                    + $"\nreset Pin: {provisioData.resetPin}"
                    );

                }
                else
                {

                    var prosvitStr = "\n You can choose to sign in using your existing social logins or use the following credentials\n"
                    + $"\nUser name: {provisioData.email}";

                    if (!string.IsNullOrWhiteSpace(provisioData.password))
                    {
                        prosvitStr += $"\nPassword: {provisioData.password}";
                    }

                    if (!string.IsNullOrWhiteSpace(provisioData.provider))
                    {
                        prosvitStr += $"\nUsing social credentials: {provisioData.provider}";
                    }

                    text += prosvitStr;
                }
            }

            text += "\n\nPlease refer to these user guide links to login and get started with REV."
                + "\n\n1. Login to REV https://www.scanrev.com/supportkb/login-into-rev/"
                + "\n2. Get started with REV  https://www.scanrev.com/supportkb/quick-start-guide-for-rev-users/"
                + "\n\nRegards\nYour ScanRev team\nhttps://scanrev.com";

            await _mailsender.sendEmailAsync(
                new[] { toEmail },
                $"You are invited to join REV workspace {req.workspace}",
                text,
                mailbCcList: string.IsNullOrWhiteSpace(bCCEmail) ? null : new[] { bCCEmail }
                );

        }


    }
}
