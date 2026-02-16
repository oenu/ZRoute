// Main. Consume generated models and API classes.

import { DefaultApi } from "./generated/apis/DefaultApi";

const api = new DefaultApi();

async function main(): Promise<void> {
  try {
    await api.getHealth();
    console.log("API is healthy!");
  } catch (error) {
    console.error("API health check failed:", error);
  }
}

void main();
