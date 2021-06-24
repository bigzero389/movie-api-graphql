import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const PORT = 80;
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers: resolvers
}); 

server.start({port : PORT},() => console.log("Graphql Server Running"));
//console.log("bigzero Hello");
