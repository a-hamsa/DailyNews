﻿using Backend.Models.DTOs;

namespace Backend.Repositories
{
    public interface IAccountRepo
    {
        Task<Response> Register(RegisterDTO registerDTO);
        Task<LoginResponse> Login(LoginDTO loginDTO);
    }
}