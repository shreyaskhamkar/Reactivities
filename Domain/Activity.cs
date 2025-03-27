namespace Domain;

public class Activity
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public DateTime Date { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required string Category { get; set; }
    public bool IsCancelled { get; set; }

    //location properties
    public required string City { get; set; }
    public required string Venue { get; set; }
    public Double Latitude { get; set; }
    public Double Longitude { get; set; }
}
