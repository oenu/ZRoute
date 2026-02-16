# ZRoute

Logical mapping of transit systems with highly specific station details, enabling accessible routing.

## Project Structure

| Directory | Description |
|-----------|-------------|
| `api/` | OpenAPI 3.1 specification with Redocly bundling |
| `server/` | Spring Boot 4 backend (Java 24, Gradle) |
| `client/` | React 19 + TypeScript library (Vite 7, pnpm) |
| `docs/` | Project documentation |

## Getting Started

### Prerequisites

This project uses [Nix](https://nixos.org/) with flakes and [direnv](https://direnv.net/) for reproducible development environments.

### Setup

```bash
# Allow direnv to load the Nix devShell
direnv allow

# Verify tools
java -version    # JDK 24
node -v          # Node.js 24
pnpm -v          # pnpm 10.x
```

### Server

```bash
cd server
./gradlew build
```

### Client

```bash
cd client
pnpm install
pnpm build
```

### API

```bash
cd api
npx @redocly/cli bundle openapi.yaml -o bundled/openapi.yaml
```

## License

GPL-3.0-or-later
