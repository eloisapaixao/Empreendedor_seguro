using Microsoft.AspNetCore.Mvc;
using praticas_API.Data;
using praticas_API.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace praticas_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class VideosController : ControllerBase
    {
        private VideosContext _context;

        public VideosController(VideosContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Videos>> GetAll()
        {
            return _context.Videos.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Videos> Get(int id)
        {
            try
            {
                var result = _context.Videos.Find(id);
                
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }
    }
}