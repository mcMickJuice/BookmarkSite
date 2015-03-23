using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;

namespace Bookmarky.CoreSite.Utility
{
    public static class ConfigHelper
    {
        public static string GetApiOrigin()
        {
            return getConfigValue("apiOrigin");
        }

        private static string getConfigValue(string key)
        {
            return ConfigurationManager.AppSettings.Get(key);
        }
    }
}