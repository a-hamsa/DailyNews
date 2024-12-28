using AutoMapper;
using Backend.Data;
using Backend.Models.DTOs;
using Backend.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Backend.Repositories
{
    public class AccountRepo : IAccountRepo
    {
        private readonly AppDbContext appDbContext;
        private readonly IMapper mapper;
        private readonly IConfiguration config;

        public AccountRepo(AppDbContext appDbContext, IMapper mapper, IConfiguration config)
        {
            this.appDbContext = appDbContext;
            this.mapper = mapper;
            this.config = config;
        }

        public async Task<LoginResponse> Login(LoginDTO loginDTO)
        {
            var user = await FindUserByEmail(loginDTO.Email);
            if (user != null)
            {
                bool verifyPassword = BCrypt.Net.BCrypt.Verify(loginDTO.Password, user.Password);
                if (!verifyPassword)
                    return new LoginResponse(false, null, "Invalid Credentials");
                string token = GenerateToken(user);
                return new LoginResponse(true, token, "Login successful");
            }
            return new LoginResponse(false, null, "User doesn't exist");
        }

        private string GenerateToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var UserClaims = new[]
            {
                    new Claim("Username", user.Username),
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim("Email", user.Email),
                };
            var token = new JwtSecurityToken(
                issuer: config["Jwt:Issuer"],
                audience: config["Jwt:Audience"],
                claims: UserClaims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private async Task<User> FindUserByEmail(string email)
        {
            email = email.ToLower();
            return await appDbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<Response> Register(RegisterDTO registerDTO)
        {
            var user = await FindUserByEmail(registerDTO.Email);
            if (user != null)
                return new Response { Message = "User already exists" };
            var addUser = mapper.Map<User>(registerDTO);
            addUser.Password = BCrypt.Net.BCrypt.HashPassword(registerDTO.Password);
            addUser.Role = "User";
            appDbContext.Users.Add(addUser);
            await appDbContext.SaveChangesAsync();
            return new Response(true, "Created");
        }
    }
}
