using System.ComponentModel.DataAnnotations;

namespace praticas_API.Models
{
    public class Cursos
    {
        public int id {get;set;}
        public string? imagem {get; set;}
        public string? nomeCurso {get;set;}
        public string? descricao {get;set;}
        public int qtdAulas {get;set;}
        public int cargaHoraria {get;set;}
        public int qtdExercicio {get;set;}
    }
}