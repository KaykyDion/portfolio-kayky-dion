import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_EMAIL: z.string().email(),
});

const _env = envSchema.safeParse({
  NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
});

if (!_env.success) {
  console.error("❌ Invalid environment variables:", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
