import express from "express";
import { ApolloServer } from "apollo-server-express";
import { importSchema } from "graphql-import";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//Connect MongoDB
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true }
);

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
app.listen({ port: process.env.PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}${
      server.graphqlPath
    }`
  )
);
