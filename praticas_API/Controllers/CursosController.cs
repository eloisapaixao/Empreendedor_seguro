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

    public class CursosController : ControllerBase
    {
        private CursosContext _context;

        public CursosController(CursosContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Cursos>> GetAll()
        {
            return _context.Cursos.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Cursos> Get(int id)
        {
            try
            {
                var result = _context.Cursos.Find(id);
                
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