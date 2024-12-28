using AutoMapper;
using Backend.Models.DTOs;
using Backend.Models.Entities;

namespace Backend.AutoMapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<AddReqeustDTO, News>();
            CreateMap<UpdateRequestDTO, News>();
            CreateMap<News, ResponseDTO>();
            CreateMap<RegisterDTO, User>();
        }
    }
}
