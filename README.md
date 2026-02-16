# ZRoute

Logical mapping of transit systems with highly specific station details, enabling accessible routing.

## Project Structure

| Directory | Description                                     |
| --------- | ----------------------------------------------- |
| `api/`    | OpenAPI 3.1 specification with Redocly bundling |
| `server/` | Spring Boot 4 backend (Java 24, Gradle)         |
| `client/` | React 19 + TypeScript library (Vite 7, pnpm)    |
| `docs/`   | Project documentation                           |

## Getting Started

This project uses [Nix](https://nixos.org/) with flakes and [direnv](https://direnv.net/) for reproducible development environments.

```bash
# Allow direnv to load the Nix devShell
direnv allow

# Install dependencies
make install

# Build everything
make build

# Format code
make format
```

## Common Commands

```bash
make help              # Show all available commands
make dev-server        # Run server in development mode
make dev-client        # Run client development server
make test              # Run tests
make generate-api      # Generate API code (client + server)
make clean             # Clean build artifacts
```

## License

GPL-3.0-or-later
