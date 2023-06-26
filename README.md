# App Dir Template with Auth & tRPC

This is a template project that has auth set up using NextAuth (Auth.js) & tRPC set up for data fetching. A lot of the little useful hacks and tools set up here are also swiped from the create-t3-app template: env validation (with explainer comments), `getBaseUrl()`, and the eslint & prettier configs.

#### Why & How

Currently, tRPC does not have an official method for use with the App Directory. This implementation uses it via the fetch adapter, as `app` dir Routes use the `Request` & `Response` API.

**No Prisma/Kysely/Drizzle/*Other*DB?**  
There is no database adapter/layer configured here because that is not something this template is meant to have an opinion on.
