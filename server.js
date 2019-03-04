import express from "express";
import { ApolloServer } from "apollo-server-express";
import { importSchema } from "graphql-import";

//Resolvers
import resolvers from "./graphql/resolvers";

const server = new ApolloServer({
  typeDefs: importSchema("./graphql/schema.graphql"),
  resolvers
});

const app = express();

//Public Dir
app.use(express.static("public"));

server.applyMiddleware({ app });
app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
);
