import {
  fetchRequestHandler,
  type FetchCreateContextFnOptions,
} from "@trpc/server/adapters/fetch";
import { getAppSession } from "@/server/auth";
import { createContextInner, type Context } from "@/server/trpc/context";
import { mainRouter } from "@/server/trpc/routers/main";

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: mainRouter,
    createContext: async (
      _opts: FetchCreateContextFnOptions
    ): Promise<Context> => {
      const session = await getAppSession();
      return createContextInner({
        session,
      });
    },
  });
};

export { handler as GET, handler as POST };
