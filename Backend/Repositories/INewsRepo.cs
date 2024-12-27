using Backend.Models.DTOs;

namespace Backend.Repositories
{
    public interface INewsRepo
    {
        Task<Response> Add(AddReqeustDTO request);
        Task<Response> Update(UpdateRequestDTO request);
        Task<List<ResponseDTO>> GetAll();
        Task<ResponseDTO> GetById(int id);
        Task<Response> Delete(int id);
    }
}
