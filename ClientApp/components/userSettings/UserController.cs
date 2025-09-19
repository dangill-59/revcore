using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using reactBase;
using restUpdate;
using Utilities;

namespace components.userSettings
{
    /// <summary>
    /// it handels the global user properties. For workspace user see PermissionsConroller
    /// </summary>
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : Controller
    {
        readonly commonInterfaces.IRevAuthDatabase _revAuthDb;
        readonly commonInterfaces.IRevDatabase _revDb;
        public UserController(commonInterfaces.IRevAuthDatabase revAuthDb, commonInterfaces.IRevDatabase revDb)
        {
            _revAuthDb = revAuthDb;
            _revDb = revDb;
        }

        [HttpGet]
        public UserUpdateReqModel getUserInfo()
        {
            var userName = this.currentLoggedonUser();
            var dbUser = _revAuthDb.getQueryable<User>().Single(u => u.UserName == userName);
            return new UserUpdateReqModel(dbUser);
        }

        [HttpPost]
        public async Task updateUserInfo([FromBody] UserUpdateReqModel res)
        {
            var userName = this.currentLoggedonUser();
            var dbUser = _revAuthDb.getQueryable<User>().Single(u => u.UserName == userName);
            var workspaceUserCollection = _revDb.getCollection<WorkspaceUserModel>();


            if (string.IsNullOrWhiteSpace(dbUser.emailaddress))
            {
                dbUser.emailaddress = res.emailaddress;
            }
            else
            {
                if (!string.IsNullOrWhiteSpace(res.emailaddress) && res.emailaddress != dbUser.emailaddress)
                    throw new ExceptionWithCode("You email address cannot be changed at this time. Please contact support");
            }

            dbUser.preferredName = res.preferredName;
            dbUser.phoneNumber = res.phoneNumber;
            dbUser.fullName = res.fullName;

            await _revAuthDb.AddorUpdateAsync(dbUser);

            // Checking if the workspace has fullname and phone number, if not save them

            var existing = await workspaceUserCollection.Find(u => u.userId == dbUser.emailaddress).SingleOrDefaultAsync();
            if (existing != null)
            {
                if (null != existing && (existing.phoneNumber == null))
                {
                    await workspaceUserCollection.UpdateOneAsync(u => u.userId == dbUser.emailaddress,
                        Builders<WorkspaceUserModel>.Update.Set(u => u.phoneNumber, res.phoneNumber));
                }
                if (null != existing && (existing.fullName == null))
                {
                    await workspaceUserCollection.UpdateOneAsync(u => u.userId == dbUser.emailaddress,
                        Builders<WorkspaceUserModel>.Update.Set(u => u.fullName, res.fullName));
                }
            }
        }
    }
}
