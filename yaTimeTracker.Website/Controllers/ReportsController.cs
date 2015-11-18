﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace yaTimeTracker.Website.Controllers
{
    [Authorize(Roles = "Admin")]
    public class ReportsController : Controller
    {
        // GET: Dashboard
        public ActionResult Index()
        {
            return View();
        }       
    }
}
