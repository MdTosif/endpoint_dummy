import * as dotenv from "dotenv";
import { z } from "zod";


const envPath = `.env.${process.env["NEXT_ENV"] ?? 'development'}`

console.log({envPath});
dotenv.config({
  path: envPath,
});

const envSchema = z.object({
  NODE_ENV: z.enum(["production", "development", "test", "qa"]).default('development'),
  PORT: z.string().default("3000"),
  SERVER_URL: z.string(),
  FRONTEND_URL: z.string(),
  CORS_ORIGIN: z.string().default("*"),
  JWT_SECRET: z.string().min(8),
  JWT_EXPIRY_IN: z.string().default("1d"),
  DB_DATABASE_URL: z.string(),
});

// Fetch and validate environment variables
const result = envSchema.safeParse(process.env);

// Handle validation errors
if (!result.success) {
  const errorMessages = result.error.errors
    .map((err) => `Key: ${err.path.join(".")}, Issue: ${err.message}`)
    .join("\n");
  throw new Error(`Environment variable validation error:\n${errorMessages}`);
}

const config = {
  frontend: {},
  backend: {
    db:{
      url: result.data.DB_DATABASE_URL,
    }
  },
} as const;
export default config;
