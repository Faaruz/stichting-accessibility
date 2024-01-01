using System.ComponentModel.DataAnnotations;

namespace Stichting_Accessibility.Models;

public class Beheerder
{
    [Key]
    public int BeheerderId { get; set; }

    [MaxLength(50)]
    public string Voornaam { get; set; }

    [MaxLength(50)]
    public string Achternaam { get; set; }

    public bool Werkstatus { get; set; }

    public bool TypeBeheerder { get; set; }
}