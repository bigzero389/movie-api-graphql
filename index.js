import { createServer } from 'node:http';
import { createYoga } from "graphql-yoga";
// import resolvers from './graphql/resolvers';
// 왜 아래처럼 하드코딩 하면 되고 resolvers 를 import 해서 쓰려고 하면 안되는지 이해가 안됨.

const yoga = createYoga({
  typeDefs: "graphql/schema.graphql",
  resolvers: {
    Query: {
      movies: (_, {limit, rating}) => getMovies(limit, rating),
      movie: (_, { id }) => getMovie(id),
      suggestions: (_, { id }) => getSuggestions(id)
    }
    /*
    ,
      Mutation: {
      addMovie: (_, {name, score}) => addMovie(name, score),
      deleteMovie: (_, {id}) => deleteMovie(id)
    }
    */
  }
}); 

const server = createServer(yoga);
server.listen(4000, () => {
  console.log("bigzero Hello");
})