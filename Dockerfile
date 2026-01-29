# Use the SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Copy the project file and restore dependencies
COPY ["ShotCrude.Api/ShotCrude.Api.csproj", "ShotCrude.Api/"]
RUN dotnet restore "ShotCrude.Api/ShotCrude.Api.csproj"

# Copy the remaining source code
COPY . .
WORKDIR "/src/ShotCrude.Api"

# Build and publish the application
RUN dotnet publish "ShotCrude.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Use the runtime image for the final stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Expose the port the app runs on
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

ENTRYPOINT ["dotnet", "ShotCrude.Api.dll"]
