
using commonInterfaces;
using commonInterfaces.dbDataTypes;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using reactBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;
using components.revLogin;

namespace components.permissions
{
    /// <summary>
    /// results after provisioneg new user
    /// </summary>
    public class ProvisionedResults
    {
        public string userName { get; set; }

        public string email { get; set; }
        public string password { get; set; }


        public string resetPin { get; set; }

        public string prefferedName { get; set; }

        /// <summary>
        /// social sign in
        /// </summary>
        public string provider { get; set; }
    }

    public interface IProvisionAuthProvider
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="email"></param>
        /// <param name="existingUserId">user already exists and this is the user id</param>
        /// <param name="desirednewUserId">if user has not been provision use this userid</param>
        /// <returns></returns>
        Task<ProvisionedResults> ProvisionUserAsync(string email, string existingUserId, string desirednewUserId);
        Task<WorkspaceUserModel> handleJoinInvitation(JoinInvitationModel invitation, IRevDatabase revDb, string autheticationUserName);
    }

    public class ProvisionAuthProvider : IProvisionAuthProvider
    {
        readonly IConfiguration _configuration;
        readonly ILogger _logger;
        commonInterfaces.IRevAuthDatabase _authDb;

        public ProvisionAuthProvider(
            /*
             This can be called with workspace so don't inject anything that needs a workspace
             NO IRevDb, IStorage etc
            */
            IConfiguration configuration,
            IRevAuthDatabase authDb,
            ILogger<ProvisionAuthProvider> logger
            )
        {
            _configuration = configuration;
            _logger = logger;
            _authDb = authDb;

        }

        public async Task<WorkspaceUserModel> handleJoinInvitation(JoinInvitationModel invitation, IRevDatabase revDb, string autheticationUserName)
        {
            var workSpaceUser = revDb.getQueryable<WorkspaceUserModel>()
                .Where(w => w.id == invitation.userId)
                .Single();

            string existingUserId = null;

            if (!workSpaceUser.isVaccant)
            {
                if (workSpaceUser.userId == autheticationUserName)
                {
                    _logger.LogDebug("user has already joined with the same credentials");
                    return workSpaceUser;
                }

                if (null != revDb.getQueryable<WorkspaceUserModel>().Where(u => u.userId == autheticationUserName).FirstOrDefault())
                {
                    throw new ExceptionWithCode("You already have an account with this Workspace with another name");
                }

                existingUserId = workSpaceUser.userId;

                var userCollection = _authDb.getCollection<User>();


                var emailMap = (await userCollection.Find(u => new[] { workSpaceUser.userId, autheticationUserName }.Contains(u.UserName)).ToListAsync())
                    .ToDictionary(k => k.UserName, v => v.emailaddress);

                if (emailMap.ContainsKey(workSpaceUser.userId) && emailMap.ContainsKey(autheticationUserName)
                    && emailMap[workSpaceUser.userId].ToLower() == emailMap[autheticationUserName].ToLower())
                {
                    _logger.LogDebug("changing user to new provider");
                }
                else
                {
                    throw new ExceptionWithCode($"We need a social credential with email address {emailMap[workSpaceUser.userId]}");
                }

            }


            var workspace = _authDb.getQueryable<WorkspaceModel>()
                .Where(w => w.name == invitation.workspace)
                .Single();

            if (!workspace.users.Contains(autheticationUserName))
            {
                workspace.users = workspace.users.Concat(new[] { autheticationUserName }).ToArray();

                if (null != existingUserId)
                {
                    workspace.users = workspace.users.Where(u => u != existingUserId).ToArray();
                }

                await _authDb.AddorUpdateAsync(workspace);
            }


            workSpaceUser.userId = autheticationUserName;

            return await revDb.AddorUpdateAsync(workSpaceUser);
        }

        public async Task<ProvisionedResults> ProvisionUserAsync(string email, string existingUserId, string desirednewUserId)
        {
            var userCollection = _authDb.getCollection<User>();

            var provisioned = new ProvisionedResults
            {
                email = email,
                userName = existingUserId,
                resetPin = CreateRandomPin(),
            };

            string userIdToUpdate = null;

            User theUser;

            if (!string.IsNullOrWhiteSpace(existingUserId))
            {
                userIdToUpdate = existingUserId;

                theUser = await userCollection.Find(u => u.UserName == userIdToUpdate).SingleAsync();
            }
            else
            {
                _logger.LogDebug($"creating new user {desirednewUserId}");
                if (string.IsNullOrWhiteSpace(desirednewUserId))
                    throw new ArgumentNullException("desirednewUserId");

                provisioned.userName = desirednewUserId;
                userIdToUpdate = desirednewUserId;

                theUser = await userCollection.Find(u => u.UserName == desirednewUserId).FirstOrDefaultAsync();
                if (null != theUser)
                {
                    _logger.LogDebug($"user {desirednewUserId} already exists");
                }
                else
                {
                    theUser = new User
                    {
                        UserName = provisioned.userName,
                        emailaddress = email,
                        pwdDigest = $"notTobeUsed_{Guid.NewGuid()}",
                        resetPin = provisioned.resetPin
                    };

                    await userCollection.InsertOneAsync(theUser);
                }

            }

            provisioned.prefferedName = theUser.preferredName ?? theUser.emailaddress ?? theUser.UserName;


            if (!string.IsNullOrWhiteSpace(userIdToUpdate))
            {
                var done = await userCollection.UpdateOneAsync(u => u.UserName == userIdToUpdate,
                    Builders<User>.Update
                    .Set(u => u.pwdDigest, $"notTobeUsed_{Guid.NewGuid()}")
                    .Set(u => u.resetPin, provisioned.resetPin)
                    );

                if (done.ModifiedCount != 1)
                {
                    throw new ExceptionWithCode($"user {existingUserId} not found");
                }
            }

            return provisioned;

        }

        public class PasswordOptions
        {
            public int RequiredLength { get; set; }
            public int RequiredUniqueChars { get; set; }
            public bool RequireDigit { get; set; }
            public bool RequireLowercase { get; set; }
            public bool RequireNonAlphanumeric { get; set; }
            public bool RequireUppercase { get; set; }
        }

        public static string CreateRandomPin()
        {
            var pin = new Random().Next(100000, 999999);

            return pin.ToString();

        }

        /// <summary>
        /// Generates a Random Password
        /// respecting the given strength requirements.
        /// </summary>
        /// <param name="opts">A valid PasswordOptions object
        /// containing the password strength requirements.</param>
        /// <returns>A random password</returns>
        public static string CreateRandomPassword(PasswordOptions opts = null)
        {
            if (opts == null) opts = new PasswordOptions()
            {
                RequiredLength = 8,
                RequiredUniqueChars = 4,
                RequireDigit = true,
                RequireLowercase = true,
                RequireNonAlphanumeric = true,
                RequireUppercase = true
            };

            string[] randomChars = new[] {
        "ABCDEFGHJKLMNOPQRSTUVWXYZ",    // uppercase 
        "abcdefghijkmnopqrstuvwxyz",    // lowercase
        "0123456789",                   // digits
        "!@$?_-"                        // non-alphanumeric
    };
            Random rand = new Random(Environment.TickCount);
            List<char> chars = new List<char>();

            if (opts.RequireUppercase)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[0][rand.Next(0, randomChars[0].Length)]);

            if (opts.RequireLowercase)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[1][rand.Next(0, randomChars[1].Length)]);

            if (opts.RequireDigit)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[2][rand.Next(0, randomChars[2].Length)]);

            if (opts.RequireNonAlphanumeric)
                chars.Insert(rand.Next(0, chars.Count),
                    randomChars[3][rand.Next(0, randomChars[3].Length)]);

            for (int i = chars.Count; i < opts.RequiredLength
                || chars.Distinct().Count() < opts.RequiredUniqueChars; i++)
            {
                string rcs = randomChars[rand.Next(0, randomChars.Length)];
                chars.Insert(rand.Next(0, chars.Count),
                    rcs[rand.Next(0, rcs.Length)]);
            }

            return new string(chars.ToArray());
        }


    }
}
