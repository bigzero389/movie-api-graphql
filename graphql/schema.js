import { createSchema } from "graphql-yoga";
import resolvers from "./resolvers.js";

export const schema = createSchema({
  // typeDefs 를 import 시켰더니 읽어지지 않아서 코드에 embeded 시킴
  // file 로 별도 분리하려면 fs 로 file 을 읽어들여야 한다.
  typeDefs: /* GraphQL */ `
  type Movie {
    id: Int!
    title: String!
    rating: Float!
    summary: String!
    language: String!
    medium_cover_image: String!
    description_intro: String
    genres: [String]
  }
  
  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    suggestions(id: Int!): [Movie]!
  }
  
  type Mutation {
    addMovie(name: String!, score: Int!): Movie!
    deleteMovie(id: Int!): Boolean!
  }
  `,
  resolvers 
})