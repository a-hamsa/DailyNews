namespace Backend.Models.DTOs
{
    public record UpdateRequestDTO(int Id, string Title, string Description, DateTime Date, string author);
}
