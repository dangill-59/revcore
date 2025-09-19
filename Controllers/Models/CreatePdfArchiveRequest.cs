namespace revCore2site.Controllers.Models;

public class CreatePdfArchiveRequest
{
    public string[] DocIds { get; set; }
    public string[] IndexesToNameWith { get; set; }
}
