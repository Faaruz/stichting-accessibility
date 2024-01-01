using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Duende.IdentityServer.EntityFramework.Entities;
using Duende.IdentityServer.EntityFramework.Interfaces;
using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Stichting_Accessibility.Models;

namespace Stichting_Accessibility.Data;

public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>, IPersistedGrantDbContext
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options,
        IOptions<OperationalStoreOptions> operationalStoreOptions)
        : base(options, operationalStoreOptions)
    {
    }

    // DbSet properties for your application-specific entities
    public DbSet<Deskundigen> Deskundigen { get; set; }
    public DbSet<Bedrijf> Bedrijven { get; set; }
    public DbSet<Beheerder> Beheerders { get; set; }
    public DbSet<Onderzoek> Onderzoeken { get; set; }

    // Implement IPersistedGrantDbContext properties and methods
    public DbSet<PersistedGrant> PersistedGrants { get; set; }
    public DbSet<DeviceFlowCodes> DeviceFlowCodes { get; set; }
    public DbSet<Key> Keys { get; set; }

    Task<int> IPersistedGrantDbContext.SaveChangesAsync() => base.SaveChangesAsync();
}