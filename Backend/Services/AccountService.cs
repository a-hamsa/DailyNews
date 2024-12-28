using Backend.Models.DTOs;
using Backend.Repositories;

namespace Backend.Services
{
    public class AccountService(IAccountRepo account) : IAccountService
    {
        public async Task<LoginResponse> Login(LoginDTO loginDTO) => await account.Login(loginDTO);

        public async Task<Response> Register(RegisterDTO registerDTO) => await account.Register(registerDTO);
    }
}
