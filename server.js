import express from "express";
import { ApolloServer } from "apollo-server-express";
import { importSchema } from "graphql-import";
import db from "./db";

// Models
import User from "./models/User";
import Post from "./models/Post";

//Resolvers
import resolvers from "./graphql/resolvers";

const server = new ApolloServer({
  typeDefs: importSchema("./graphql/schema.graphql"),
  resolvers,
  context: { User, Post }
});

const app = express();

//Public Dir
app.use(express.static("public"));

server.applyMiddleware({ app });
app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
);
