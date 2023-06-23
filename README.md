# App Dir Template with Auth & tRPC

This is a template project that has auth set up using NextAuth (Auth.js) & tRPC set up for data fetching.

#### Why & How

Currently, tRPC does not have an official method for use with the App Directory. This implementation uses it via the fetch adapter, as the `app` dir Routes use the `Request` & `Response` API.
