CREATE TABLE "todos" (
	"id" uuid NOT NULL,
	"task" text NOT NULL,
	"is_completed" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
