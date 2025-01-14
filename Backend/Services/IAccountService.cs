using Backend.Models.DTOs;

namespace Backend.Services
{
    public interface IAccountService
    {
        Task<Response> Register(RegisterDTO registerDTO);
        Task<LoginResponse> Login(LoginDTO loginDTO);
        Task<IEnumerable<UserDTO>> GetAllUsers();
        Task<Response> Logout();
    }
}
