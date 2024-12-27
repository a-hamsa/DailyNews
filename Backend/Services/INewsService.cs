using Backend.Models.DTOs;

namespace Backend.Services
{
    public interface INewsService
    {
        Task<Response> Add(AddReqeustDTO request);
        Task<Response> Update(UpdateRequestDTO request);
        Task<List<ResponseDTO>> GetAll();
        Task<ResponseDTO> GetById(int id);
        Task<Response> Delete(int id);
    }
}
