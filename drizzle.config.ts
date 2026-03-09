import { defineConfig } from 'drizzle-kit';
import   'dotenv';

// dotenv.config(); // Dòng này rất quan trọng để đọc DATABASE_URL

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

