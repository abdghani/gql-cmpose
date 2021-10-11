require('dotenv').config()
const { ApolloServer, gql } = require("apollo-server-express");
const { composeMongoose } = require("graphql-compose-mongoose");
const { schemaComposer } = require("graphql-compose");
const connect_db = require("./util/db");
const http = require("http");
const app = require("express")();

const schema = require("./models");

connect_db().then(async () => {
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app });
  const httpServer = http.createServer(app);
  httpServer.listen(process.env.PORT, () => console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`));
});
