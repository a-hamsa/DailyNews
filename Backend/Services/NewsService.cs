using Backend.Models.DTOs;
using Backend.Models.Entities;
using Backend.Repositories;

namespace Backend.Services
{
    public class NewsService(INewsRepo news) : INewsService
    {
        public async Task<Response> Add(AddReqeustDTO request) => await news.Add(request);
        public async Task<Response> Update(UpdateRequestDTO request) => await news.Update(request);
        public async Task<Response> Delete(int id) => await news.Delete(id);
        public async Task<List<ResponseDTO>> GetAll() => await news.GetAll();
        public async Task<ResponseDTO> GetById(int id) => await news.GetById(id);
    }
}
