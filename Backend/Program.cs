using Backend.AutoMapper;
using Backend.Data;
using Backend.Models.DTOs;
using Backend.Repositories;
using Backend.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString("default")));
builder.Services.AddScoped<INewsRepo, NewsRepo>();
builder.Services.AddScoped<INewsService, NewsService>();
builder.Services.AddAutoMapper(typeof(MapperProfile));
builder.Services.AddScoped<IAccountRepo, AccountRepo>();
builder.Services.AddScoped<IAccountService, AccountService>();
builder.Services.AddAuthorization();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3001") // Frontend URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddAuthorization();
builder.Services.AddSingleton<ITokenReplayCache, TokenReplayCache>();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!)),
            ValidateTokenReplay = true,
            ClockSkew = TimeSpan.Zero
        };
        options.Events = new JwtBearerEvents
        {
            OnMessageReceived = async context =>
            {
                var token = context.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");
                var dbContext = context.HttpContext.RequestServices.GetRequiredService<AppDbContext>();
                var blacklistedToken = await dbContext.BlacklistedTokens.FirstOrDefaultAsync(t => t.Token == token);
                if (blacklistedToken != null)
                {
                    context.Fail("This token is blacklisted.");
                }
            }
        };
    });

builder.Services.AddOptions<JwtBearerOptions>(JwtBearerDefaults.AuthenticationScheme)
    .Configure<ITokenReplayCache>((options, tokenReplayCache) =>
    {
        options.TokenValidationParameters.TokenReplayCache = tokenReplayCache;
    });

builder.Services.AddSwaggerGen(swagger =>
{
    swagger.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "News API",
        Description = "A simple example ASP.NET Core Web API",
    });
    swagger.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
    });
    swagger.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            }, Array.Empty<string>()
        }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowReactApp");
app.UseAuthentication();
app.UseAuthorization();

app.UseHttpsRedirection();

//Authetication
app.MapPost("api/Register", async (RegisterDTO request, IAccountService accountService) =>
{
    return Results.Ok(await accountService.Register(request));
}).AllowAnonymous();
app.MapPost("api/Login", async (LoginDTO request, IAccountService accountService) =>
{
    return Results.Ok(await accountService.Login(request));
}).AllowAnonymous();

app.MapGet("api/GetNews", async (INewsService newsService) =>
{
    return Results.Ok(await newsService.GetAll());
});
app.MapGet("api/GetNews/{id:int}", async (INewsService newsService, int id) =>
{
    return Results.Ok(await newsService.GetById(id));
});
app.MapPost("api/AddNews", async (AddReqeustDTO request, INewsService newsService) =>
{
    return Results.Ok(await newsService.Add(request));
}).RequireAuthorization();
app.MapPut("api/UpdateNews", async (UpdateRequestDTO request, INewsService newsService) =>
{
    return Results.Ok(await newsService.Update(request));
}).RequireAuthorization();
app.MapDelete("api/DeleteNews/{id:int}", async (INewsService newsService, int id) =>
{
    return Results.Ok(await newsService.Delete(id));
}).RequireAuthorization();

app.MapGet("api/GetAllUsers", async (IAccountService accountService) =>
{
    return Results.Ok(await accountService.GetAllUsers());
});

app.MapPost("api/Logout", async (IAccountService accountService) =>
{
    return Results.Ok(await accountService.Logout());
}).RequireAuthorization();

app.MapPost("api/AddUsers", async (AddUserDTO request, IAccountService accountService) =>
{
    return Results.Ok(await accountService.AddUser(request));
}).RequireAuthorization();

app.Run();