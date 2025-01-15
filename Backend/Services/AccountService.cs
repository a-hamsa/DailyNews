using Backend.Models.DTOs;
using Backend.Repositories;

namespace Backend.Services
{
    public class AccountService(IAccountRepo account) : IAccountService
    {
        public async Task<LoginResponse> Login(LoginDTO loginDTO) => await account.Login(loginDTO);

        public async Task<Response> Register(RegisterDTO registerDTO) => await account.Register(registerDTO);

        public async Task<IEnumerable<UserDTO>> GetAllUsers() => await account.GetAllUsers();

        public async Task<Response> Logout() => await account.Logout();

        public async Task<bool> AddUser(AddUserDTO request) => await account.AddUser(request);
    }
}
