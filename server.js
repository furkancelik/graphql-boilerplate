import express from "express";
import { ApolloServer } from "apollo-server-express";
import { importSchema } from "graphql-import";
import mongoose from "mongoose";
import Token from "./helpers/token";
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
  context: ({ req }) => ({
    User,
    Post,
    activeUser: req ? req.activeUser : null
  })
});

const app = express();

//Public Dir
app.use(express.static("public"));

//Auth Middleware
app.use(async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token && token !== "null") {
    try {
      req.activeUser = await Token.verify(token);
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
  next();
});

server.applyMiddleware({ app });
app.listen({ port: process.env.PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}${
      server.graphqlPath
    }`
  )
);
