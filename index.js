import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./graphql/schema.js";

// 2024.04.30 jojojojo1322
const yoga = createYoga({
  schema,
  graphqlEndpoint: '/'
});

const server = createServer(yoga);
server.listen(4000, () => {
  console.log("bigzero GraphQL Server is running");
});
