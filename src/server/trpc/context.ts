import { type inferAsyncReturnType } from "@trpc/server";
import { type Session } from "next-auth";

type CreateContextOptions = {
  session: Session | null;
};

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    db: () => null,
  };
};

export type Context = inferAsyncReturnType<typeof createContextInner>;
//           ^?
