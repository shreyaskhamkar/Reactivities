# Reactivities

A full-stack social activities application that I am developing, built with ASP.NET Core API and React frontend.

## Features

- Create and manage social activities
- View activity details and lists
- User-friendly dashboard

## Tech Stack

- **Backend**: ASP.NET Core, Entity Framework Core, MediatR, AutoMapper
- **Frontend**: React, TypeScript, Semantic UI React, MobX
- **Database**: SQL Server (configurable)

## Getting Started

### Prerequisites

- .NET 6+ SDK
- Node.js 16+
- SQL Server (or configure for SQLite)

### Backend Setup

1. Navigate to the `API` directory:

   ```
   cd API
   ```

2. Restore dependencies:

   ```
   dotnet restore
   ```

3. Update the database:

   ```
   dotnet ef database update
   ```

4. Run the API:
   ```
   dotnet run
   ```

The API will be available at `https://localhost:5001` (or as configured in `launchSettings.json`).

### Frontend Setup

1. Navigate to the `client` directory:

   ```
   cd client
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

The React app will be available at `http://localhost:3000` (or as configured).

## Project Structure

- `API/`: ASP.NET Core Web API
- `Application/`: Application layer with CQRS pattern
- `Domain/`: Domain entities
- `Persistence/`: Data access layer with Entity Framework
- `client/`: React frontend application

## License

This project is for personal development purposes.
