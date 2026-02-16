.PHONY: help install build test clean dev run format lint generate-api

# Default target
.DEFAULT_GOAL := help

##@ General

help: ## Display this help message
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Setup

install: ## Install all dependencies (client + check server setup)
	@echo "Installing client dependencies..."
	cd client && pnpm install
	@echo "Checking server setup..."
	cd server && ./gradlew --version

##@ Build

build: build-api build-server build-client ## Build all components (API, server, client)

build-api: ## Bundle OpenAPI specification
	@echo "Bundling API specification..."
	cd client && pnpm bundle-api

build-server: ## Build Spring Boot server
	@echo "Building server..."
	cd server && ./gradlew build

build-client: ## Build TypeScript client library
	@echo "Building client..."
	cd client && pnpm build

build-jar: ## Build executable server JAR
	@echo "Building executable JAR..."
	cd server && ./gradlew bootJar

##@ Development

dev-client: ## Start client development server
	cd client && pnpm dev

dev-server: ## Run Spring Boot server in development mode
	cd server && ./gradlew bootRun

##@ Testing

test: test-server ## Run all tests

test-server: ## Run server tests
	@echo "Running server tests..."
	cd server && ./gradlew test

##@ Code Quality

format: format-server ## Format all code

format-server: ## Format server code with Spotless
	@echo "Formatting server code..."
	cd server && ./gradlew spotlessApply

lint: lint-server ## Check code formatting/quality

lint-server: ## Check server code formatting
	@echo "Checking server code formatting..."
	cd server && ./gradlew spotlessCheck

check: ## Run all verification tasks (tests + linting)
	@echo "Running all checks..."
	cd server && ./gradlew check

##@ Code Generation

generate-api: generate-api-client generate-api-server ## Generate all API code (client + server)

generate-api-client: ## Generate TypeScript client from OpenAPI spec
	@echo "Generating TypeScript API client..."
	cd client && pnpm generate-api

generate-api-server: ## Generate Spring interfaces from OpenAPI spec
	@echo "Generating Spring API server code..."
	cd server && ./gradlew openApiGenerate

##@ Documentation

docs-api: ## Generate API documentation (bundles OpenAPI spec)
	cd client && pnpm bundle-api
	@echo "API documentation bundled at api/bundled/openapi.yaml"

docs-server: ## Generate server Javadoc
	@echo "Generating Javadoc..."
	cd server && ./gradlew javadoc
	@echo "Javadoc generated at server/build/docs/javadoc/index.html"

##@ Cleanup

clean: clean-server clean-client ## Clean all build artifacts

clean-server: ## Clean server build artifacts
	@echo "Cleaning server..."
	cd server && ./gradlew clean

clean-client: ## Clean client build artifacts
	@echo "Cleaning client..."
	cd client && rm -rf dist node_modules

clean-api: ## Clean bundled API specs
	@echo "Cleaning bundled API..."
	rm -f api/bundled/openapi.yaml

clean-all: clean clean-api ## Clean everything including bundled API

##@ Utilities

validate-api: ## Validate OpenAPI specification
	@echo "Validating OpenAPI specification..."
	cd server && ./gradlew openApiValidate
