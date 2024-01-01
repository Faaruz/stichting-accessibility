using System.ComponentModel.DataAnnotations;

namespace Stichting_Accessibility.Models;

public class Bedrijf
{
    [Key]
    public string Email { get; set; }
    
    [MaxLength(80)]
    public string Voornaam { get; set; }
    
    [MaxLength(80)]
    public string Achternaam { get; set; }
    
    [MaxLength(50)]
    public string Bedrijfsnaam { get; set; }

    [MaxLength(10)]
    public string Telefoonnummer { get; set; }

    [MaxLength(6)]
    public string Postcode { get; set; }

    [MaxLength(50)]
    public string Plaats { get; set; }
    
}