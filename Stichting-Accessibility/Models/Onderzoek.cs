using System.ComponentModel.DataAnnotations;

namespace Stichting_Accessibility.Models;

public class Onderzoek
{
    [Key]
    public int OnderzoekId { get; set; }

    [MaxLength(50)]
    public string TypeOnderzoek { get; set; }

    [MaxLength(100)]
    public string Titel { get; set; }

    [MaxLength(300)]
    public string Beschrijving { get; set; }

    [MaxLength(50)]
    public string Beloning { get; set; }

    public int Capaciteit { get; set; }

    [MaxLength(50)]
    public string Status { get; set; }
}