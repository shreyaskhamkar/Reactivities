using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Activities.Any()) return;

        var activities = new List<Activity>()
        {
            new ()
            {
                Id = "a3e2b1c5-7f6d-45e2-9a87-5d6c4b3f2e1a",
                Title = "Past Activity 1",
                Date = DateTime.UtcNow.AddMonths(-2),
                Description = "Activity 2 months ago",
                Category = "drinks",
                City = "London",
                Venue = "Pub",
                Latitude = 52.3495,
                Longitude = -1.7781
            },
            new()
            {
                Id = "b3e2b1c5-7f6d-45e2-9a87-5d6c4b3f2e1a",
                Title = "Past Activity 2",
                Date = DateTime.UtcNow.AddMonths(-1),
                Description = "Activity 1 month ago",
                Category = "culture",
                City = "Paris",
                Venue = "Louvre",
                Latitude = 48.8584,
                Longitude = 2.2945
            },
            new()
            {
                Id = "c3e2b1c5-7f6d-45e2-9a87-5d6c4b3f2e1a",
                Title = "Future Activity 1",
                Date = DateTime.UtcNow.AddMonths(1),
                Description = "Activity 1 month in future",
                Category = "culture",
                City = "London",
                Venue = "Natural History Museum",
                Latitude = 51.509865,
                Longitude = -0.118092
            },
            new()
            {
                Id = "d3e2b1c5-7f6d-45e2-9a87-5d6c4b3f2e1a",
                Title = "Future Activity 2",
                Date = DateTime.UtcNow.AddMonths(2),
                Description = "Activity 2 months in future",
                Category = "music",
                City = "London",
                Venue = "Wembly Stadium",
                Latitude = 51.509865,
                Longitude = -0.118092
            },
            new()
            {
                Id = "e3e2b1c5-7f6d-45e2-9a87-5d6c4b3f2e1a",
                Title = "Future Activity 3",
                Date = DateTime.UtcNow.AddMonths(3),
                Description = "Activity 3 months in future",
                Category = "drinks",
                City = "London",
                Venue = "Another pub",
                Latitude = 51.509865,
            },
            new()
            {
                Id = "f3e2b1c5-7f6d-45e2-9a87-5d6c4b3f2e1a",
                Title = "Future Activity 4",
                Date = DateTime.UtcNow.AddMonths(4),
                Description = "Activity 4 months in future",
                Category = "drinks",
                City = "London",
                Venue = "Yet another pub",
                Latitude = 51.509865,
                Longitude = -0.118092
            },
            new()
            {
                Id = "g3e2b1c5-7f6d-45e2-9a87-5d6c4b3f2e1a",
                Title = "Future Activity 5",
                Date = DateTime.UtcNow.AddMonths(5),
                Description = "Activity 5 months in future",
                Category = "drinks",
                City = "London",
                Venue = "Pub",
            },
            new()
            {
                Id = "h3e2b1c5-7f6d-45e2-9a87-5d6c4b3f2e1a",
                Title = "Future Activity 6",
                Date = DateTime.UtcNow.AddMonths(6),
                Description = "Activity 6 months in future",
                Category = "music",
                City = "London",
                Venue = "Wembly Stadium",
            },
        };

        context.Activities.AddRange(activities);

        await context.SaveChangesAsync();
    }
}
