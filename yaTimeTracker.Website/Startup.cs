using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(yaTimeTracker.Website.Startup))]
namespace yaTimeTracker.Website
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
