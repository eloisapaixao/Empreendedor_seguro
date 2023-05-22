using System.ComponentModel.DataAnnotations;

namespace praticas_API.Models
{
    public class Usuario
    {
        [Key]
        public string? cpf {get; set;}
        public string? nome {get;set;}
        public int senha {get;set;}
        public string? email {get;set;}
    }
}