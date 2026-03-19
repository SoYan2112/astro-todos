import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL || import.meta.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing! Check your .env file or Vercel Environment Variables.");
}

// 3. Khởi tạo client
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);