﻿namespace Backend.Models.DTOs
{
    public record LoginResponse(bool Flag, string Token = null!, string Message = null!);
}