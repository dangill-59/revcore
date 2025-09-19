using commonInterfaces.dbDataTypes;
using reactBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace components.workspace
{
    public class WorkspaceForEditModel
    {
        /*
		public static readonly long MAX_CUSTOM_NAME_LENGTH = 30;
		public static readonly long MIN_CUSTOM_NAME_LENGTH = 4;

		static readonly Regex dnsSafeCharacters = new Regex("^[a-z0-9_-]*$");
		public static string validateCustomDomainName(string newName)
		{
			newName = newName.ToLower();

			if (newName.Length < MIN_CUSTOM_NAME_LENGTH)
				throw new ExceptionWithCode($"Domain name cannot be less then {MIN_CUSTOM_NAME_LENGTH} characters");

			if (newName.Length > MAX_CUSTOM_NAME_LENGTH)
				throw new ExceptionWithCode($"Domain name cannot be more the {MAX_CUSTOM_NAME_LENGTH} characters");

			if (!dnsSafeCharacters.IsMatch(newName))
			{
				throw new ExceptionWithCode("Workspace name can only contain letters, number, hyphen and underscore");
			}

			return newName;
		}

		public bool hasCustomDomain
		{
			get { return null != workSpace && null != workSpace.name && workSpace.name.Length <= MAX_CUSTOM_NAME_LENGTH; }
			set { }
		}

		public string customDomTemplate { get; set; }

		/// <summary>
		/// denotes if the new workspace domain is ready. works when domain control is set
		/// </summary>
		public bool canRedirect { get; set; }

        /// <summary>
        /// Auth0 connections 
        /// </summary>
        public string[] allowedConnections { get; set; }

		*/

        public WorkspaceModel workSpace { get; set; }




    }
}
