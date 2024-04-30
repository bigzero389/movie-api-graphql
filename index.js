import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import resolvers from "./graphql/resolvers.js";

// 2024.04.30 조현재
const yoga = createYoga({
  typeDefs: "graphql/schema.graphql",
  resolvers: resolvers,
  /*
    ,
      Mutation: {
      addMovie: (_, {name, score}) => addMovie(name, score),
      deleteMovie: (_, {id}) => deleteMovie(id)
    }
    */
});

const server = createServer(yoga);
server.listen(4000, () => {
  console.log("bigzero Hello");
});
