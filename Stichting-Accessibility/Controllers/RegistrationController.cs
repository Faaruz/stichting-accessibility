using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Stichting_Accessibility.Data;
using Stichting_Accessibility.Models;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

[ApiController]
[Route("api/[controller]")]
public class RegistrationController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;

    public RegistrationController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
    {
        _context = context;
        _userManager = userManager;
        _signInManager = signInManager;
    }

[HttpPost]
public async Task<IActionResult> RegisterUser([FromBody] UserRegistrationModel model)
{
    try
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(new { Message = "Invalid model data", Errors = ModelState.Values.SelectMany(v => v.Errors) });
        }

        var user = new ApplicationUser
        {
            UserName = model.Email,
            Email = model.Email,
            // other user properties...
        };

        var result = await _userManager.CreateAsync(user, model.Wachtwoord);

        if (result.Succeeded)
        {
            // Sign in the user (optional, based on your requirements)
            await _signInManager.SignInAsync(user, isPersistent: false);

            if (model.Role == "bedrijf")
            {
                _context.Bedrijven.Add(new Bedrijf
                {
                    Voornaam = model.Voornaam,
                    Achternaam = model.Achternaam,
                    Bedrijfsnaam = model.Bedrijfsnaam,
                    Telefoonnummer = model.Telefoonnummer,
                    Postcode = model.Postcode,
                    Plaats = model.Woonplaats,
                    Email = model.Email,
                });
            }
            else if (model.Role == "ervaringsdeskundige")
            {
                _context.Deskundigen.Add(new Deskundigen
                {
                    Voornaam = model.Voornaam,
                    Achternaam = model.Achternaam,
                    Telefoonnummer = model.Telefoonnummer,
                    Leeftijd = model.Leeftijd,
                    Postcode = model.Postcode,
                    Woonplaats = model.Woonplaats,
                    Email = model.Email,
                });
            }
            else
            {
                return BadRequest(new { Message = "Invalid role specified" });
            }

            await _context.SaveChangesAsync();

            return Ok(new { Message = "User registered successfully" });
        }
        else
        {
            // Handle errors in result.Errors
            return BadRequest(new { Message = "Failed to create user", Errors = result.Errors });
        }
    }
    catch (Exception ex)
    {
        return StatusCode(500, new { Message = $"Error: {ex.Message}" });
    }
}
}
