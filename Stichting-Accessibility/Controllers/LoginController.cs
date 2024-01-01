using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Stichting_Accessibility.Data;
using Stichting_Accessibility.Models;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class LoginController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly ApplicationDbContext _context;
    private readonly IConfiguration _configuration;

    public LoginController(
        UserManager<ApplicationUser> userManager,
        SignInManager<ApplicationUser> signInManager,
        ApplicationDbContext context,
        IConfiguration configuration)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _context = context;
        _configuration = configuration;
    }

    [HttpPost]
    public async Task<IActionResult> Login([FromBody] UserLoginModel model)
    {
        // Implement login logic
        var user = await _userManager.FindByNameAsync(model.Username);
        var jwtSettings = _configuration.GetSection("JwtSettings");
        if (jwtSettings != null)
        {
            Console.WriteLine($"JwtSettings section found: {jwtSettings.Value}");

            var secretKey = jwtSettings["SecretKey"];
            Console.WriteLine($"SecretKey: {secretKey}");

            if (string.IsNullOrEmpty(secretKey))
            {
                Console.WriteLine("SecretKey is empty or null.");
            }
        }

        
        
        if (user == null)
        {
            Console.WriteLine("User not found");
            return Unauthorized(new { Message = "Invalid credentials" });
        }

        // Hash the entered password for comparison
        var isPasswordCorrect = await _userManager.CheckPasswordAsync(user, model.Password);

        if (!isPasswordCorrect)
        {
            Console.WriteLine("Invalid credentials");
            return Unauthorized(new { Message = "Invalid credentials" });
        }

        // Use SignInManager to sign in the user or generate a token
        var token = GenerateJwtToken(user);

        // Determine the account type based on the user's email
        string accountType = GetAccountType(user.Email);

        return Ok(new
        {
            Token = token,
            Message = "Login successful",
            AccountType = accountType
        });
    }

    private string GenerateJwtToken(ApplicationUser user)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var secretKey = _configuration["JwtSettings:SecretKey"];
        Console.WriteLine($"SecretKey: {secretKey}");
        var key = Encoding.UTF8.GetBytes(secretKey);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, user.UserName) }),
            Expires = DateTime.UtcNow.AddHours(1), // Adjust expiration as needed
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    private string GetAccountType(string userEmail)
    {
        var bedrijf = _context.Bedrijven.FirstOrDefault(b => b.Email == userEmail);
        var deskundige = _context.Deskundigen.FirstOrDefault(d => d.Email == userEmail);

        if (bedrijf != null)
        {
            return "Bedrijf";
        }
        else if (deskundige != null)
        {
            return "Deskundige";
        }
        else
        {
            return "Unknown";
        }
    }
}