# Multi-stage Dockerfile for Fullstack App

# Stage 1: Build Frontend
FROM node:20-alpine AS build-frontend
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Build Backend
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build-backend
WORKDIR /src
COPY ["CaffeineCrafter.Api/CaffeineCrafter.Api.csproj", "CaffeineCrafter.Api/"]
RUN dotnet restore "CaffeineCrafter.Api/CaffeineCrafter.Api.csproj"
COPY . .
WORKDIR "/src/CaffeineCrafter.Api"
RUN dotnet publish "CaffeineCrafter.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Stage 3: Final Runtime
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

# Copy Backend artifacts
COPY --from=build-backend /app/publish .

# Copy Frontend artifacts to wwwroot for .NET to serve them
COPY --from=build-frontend /app/client/dist ./wwwroot

# Expose port
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

ENTRYPOINT ["dotnet", "CaffeineCrafter.Api.dll"]
