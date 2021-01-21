using Microsoft.AspNetCore.Mvc;
using MvcApp.Models;

namespace MvcApp.Controllers
{
    public class HomeController : Controller
    {

        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }
        
        [HttpPost]
        public IActionResult Add([FromBody] AddRequest request)
        {
            return Ok(new {Sum = request.FirstValue + request.SecondValue});
        }
    }
}
