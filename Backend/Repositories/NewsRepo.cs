using AutoMapper;
using Backend.Data;
using Backend.Models.DTOs;
using Backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
    public class NewsRepo(IMapper mapper, AppDbContext appDbContext) : INewsRepo
    {
        public async Task<Response> Add(AddReqeustDTO request)
        {
            appDbContext.News.Add(mapper.Map<News>(request));
            await appDbContext.SaveChangesAsync();
            return new Response(true, "Saved");
        }

        public async Task<Response> Delete(int id)
        {
            appDbContext.News.Remove(await appDbContext.News.FindAsync(id));
            await appDbContext.SaveChangesAsync();
            return new Response(true, "Deleted");
        }

        public async Task<ResponseDTO> GetById(int id) =>
            mapper.Map<ResponseDTO>(await appDbContext.News.FindAsync(id));

        public async Task<List<ResponseDTO>> GetAll() =>
            mapper.Map<List<ResponseDTO>>(await appDbContext.News.ToListAsync());

        public async Task<Response> Update(UpdateRequestDTO request)
        {
            appDbContext.News.Update(mapper.Map<News>(request));
            await appDbContext.SaveChangesAsync();
            return new Response(true, "Updated");
        }
    }
}
