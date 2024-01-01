namespace Stichting_Accessibility.Models;

public class UserRegistrationModel
{
    public string Role { get; set; } // 'bedrijf' or 'ervaringsdeskundige'
    // Add properties specific to Bedrijf or Ervaringsdeskundige
    // For example:
    public string Voornaam { get; set; }
    public string Achternaam { get; set; }
    public string Bedrijfsnaam { get; set; }
    public string Email { get; set; }
    public string Telefoonnummer { get; set; }
    public int Leeftijd { get; set; }
    public string Postcode { get; set; }
    public string Woonplaats { get; set; }
    public string Wachtwoord { get; set; } // Include password in registration model

}
