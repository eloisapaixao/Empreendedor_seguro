using System.ComponentModel.DataAnnotations;

namespace praticas_API.Models
{
    public class Videos
    {
        public int id {get;set;}
        public int idCurso {get;set;}
        public string? link {get; set;}
    }
}