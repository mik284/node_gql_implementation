import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// import db
import db from "./_db.js";

import { typeDefs } from "./shema.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    review(_, args) {
      return db.reviews.find((item) => item.id === args.id);
    },
    game(_, args) {
      return db.games.find((item) => item.id === args.id);
    },
    author(_, args) {
      return db.authors.find((item) => item.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
  },
};

// server setup
const server = new ApolloServer({
  // typedefs -------definations of types of data to expose #schema
  typeDefs,
  // resolvers ---handle incoming req and return to the client
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 40002 },
});

console.log("server ready at port ", 40002);
