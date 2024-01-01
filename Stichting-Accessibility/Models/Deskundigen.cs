using System.ComponentModel.DataAnnotations;

namespace Stichting_Accessibility.Models;

public class Deskundigen
{
    [Key]
    public int DeelnemerId { get; set; }

    [MaxLength(50)]
    public string Voornaam { get; set; }

    [MaxLength(50)]
    public string Achternaam { get; set; }

    [MaxLength(10)]
    public string Telefoonnummer { get; set; }
    public string Email { get; set; }

    public int Leeftijd { get; set; }

    [MaxLength(6)]
    public string Postcode { get; set; }

    [MaxLength(50)]
    public string Woonplaats { get; set; }
    
}