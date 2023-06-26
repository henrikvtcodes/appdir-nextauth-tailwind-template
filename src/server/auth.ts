import "server-only";
import { getServerSession, type AuthOptions } from "next-auth";
import { env } from "@/env.mjs";

// Configure NextAuth here
export const authOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [],
} satisfies AuthOptions;

export const getAppSession = () => getServerSession(authOptions);
