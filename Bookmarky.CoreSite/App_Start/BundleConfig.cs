using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Bookmarky.CoreSite.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add((new ScriptBundle("~/bundle/app")
            .Include("~/Scripts/app/*.js")    

                ));

            bundles.Add(new ScriptBundle("~/bundle/bowerjs")
                //bower:js
                
                
                
                
                
                
                
                .Include("~/ThirdParty/bower_components/modernizr/modernizr.js")
                .Include("~/ThirdParty/bower_components/jquery/dist/jquery.js")
                .Include("~/ThirdParty/bower_components/angular/angular.js")
                .Include("~/ThirdParty/bower_components/bootstrap/dist/js/bootstrap.js")
                .Include("~/ThirdParty/bower_components/moment/moment.js")
                .Include("~/ThirdParty/bower_components/toastr/toastr.js")
                .Include("~/ThirdParty/bower_components/angular-route/angular-route.js")
                .Include("~/ThirdParty/bower_components/angular-resource/angular-resource.js")
                //endbower
                );

            bundles.Add(new StyleBundle("~/bundle/bowercss")
                //bower:css
                
                
                
                
                
                
                
                .Include("~/ThirdParty/bower_components/bootstrap/dist/css/bootstrap.css")
                .Include("~/ThirdParty/bower_components/toastr/toastr.css")
                //endbower
                );

            bundles.Add(new StyleBundle("~/bundle/css")
                .Include("~/Content/Site.css")
                );
        }
    }
}