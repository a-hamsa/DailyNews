using Backend.AutoMapper;
using Backend.Data;
using Backend.Models.DTOs;
using Backend.Repositories;
using Backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString("default")));
builder.Services.AddScoped<INewsRepo,  NewsRepo>();
builder.Services.AddScoped<INewsService, NewsService>();
builder.Services.AddAutoMapper(typeof(MapperProfile));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/GetNews", async (INewsService newsService) =>
{
    return Results.Ok(await newsService.GetAll());
});
app.MapGet("/GetNews/{id:int}", async (INewsService newsService, int id) =>
{
    return Results.Ok(await newsService.GetById(id));
});
app.MapPost("/AddNews", async (AddReqeustDTO request ,INewsService newsService) =>
{
    return Results.Ok(await newsService.Add(request));
});
app.MapPut("/UpdateNews", async (UpdateRequestDTO request, INewsService newsService) =>
{
    return Results.Ok(await newsService.Update(request));
});
app.MapDelete("/DeleteNews/{id:int}", async (INewsService newsService, int id) =>
{
    return Results.Ok(await newsService.Delete(id));
});

app.Run();