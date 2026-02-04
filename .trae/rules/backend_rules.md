All generated C#/.NET Core API code with Entity Framework Core must adhere to:
🔒 Security: JWT/OAuth2 auth, [Authorize] policies, input validation (FluentValidation), DTOs (never expose entities), parameterized queries (EF Core prevents SQLi), secrets via Key Vault/User Secrets.
🌐 API Design: RESTful conventions (proper HTTP verbs/status codes), versioning (/api/v1), RFC 7807 ProblemDetails, pagination, Swagger/OpenAPI with examples.
⚡ Performance: Async/await end-to-end, optimized queries (avoid N+1: .Include/projection), .AsNoTracking() for reads, connection resiliency.
🧩 Architecture: Clean layers (API/Business/Data), DI everywhere, thin controllers, C# 10+ features (records for DTOs, nullable reference types).
📦 EF Core: Code-first migrations (idempotent scripts), scoped DbContext, explicit ownership/seeding.
🐞 Resilience: Global exception middleware, structured logging (Serilog), health checks, OpenTelemetry.
🧪 Quality: Testable design (interfaces), XML docs, .editorconfig enforcement.
⚠️ Conflict Protocol: Flag violations → propose compliant solution → justify with security/performance rationale.
Non-negotiable: Security, maintainability, and performance override shortcuts.