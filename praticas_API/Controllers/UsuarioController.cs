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

    public class UsuarioController : ControllerBase
    {
        private UsuarioContext _context;

        public UsuarioController(UsuarioContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Usuario>> GetAll()
        {
            return _context.Usuario.ToList();
        }

        [HttpGet("{cpf}")]
        public ActionResult<Usuario> Get(string cpf)
        {
            try
            {
                var result = _context.Usuario.Find(cpf);
                
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

        [HttpPost]
        public async Task<ActionResult> post(Usuario model)
        {
            try
            {
                _context.Usuario.Add(model);
                
                if (await _context.SaveChangesAsync() == 1)
                {
                    //return Ok();
                    return Created($"/api/Usuario/{model.cpf}",model);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
            // retorna BadRequest se não conseguiu incluir
            return BadRequest();
        }

        [HttpDelete("{cpf}")]
        public async Task<ActionResult> delete(string cpf)
        {
            try
            {
                var usuario = await _context.Usuario.FindAsync(cpf);
                if (usuario == null)
                {
                    //método do EF
                    return NotFound();
                }
                _context.Remove(usuario);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,"Falha no acesso ao banco de dados.");
            }
        }

        [HttpPut("{cpf}")]
        public async Task<IActionResult> put(string cpf, Usuario dadosUsuarioAlt)
        {
            try {
                //verifica se existe usuario a ser alterado
                var result = await _context.Usuario.FindAsync(cpf);
                if (cpf != result.cpf)
                {
                    return BadRequest();
                }
                result.cpf = dadosUsuarioAlt.cpf;
                result.nome = dadosUsuarioAlt.nome;
                result.senha = dadosUsuarioAlt.senha;
                result.email = dadosUsuarioAlt.email;
                await _context.SaveChangesAsync();
                return Created($"/api/Usuario/{dadosUsuarioAlt.cpf}", dadosUsuarioAlt);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,"Falha no acesso ao banco de dados.");
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> login(Usuario dadosUsuarioAlt)
        {
            try {
                Usuario usuario = _context.Usuario.ToList().Find(u => u.cpf == dadosUsuarioAlt.cpf);

                if (usuario == null)
                    return NotFound();

                if (usuario.senha == dadosUsuarioAlt.senha)
                    return Ok(usuario); 

                return Unauthorized();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,"Falha no acesso ao banco de dados.");
            }
        }
    }
}