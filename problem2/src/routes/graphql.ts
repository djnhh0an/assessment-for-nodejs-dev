import express from "express";
const graphqlRouter = express.Router();
const expressGraphQL = require("express-graphql");

graphqlRouter.get("/graphql", () => expressGraphQL({
    graphiql: true
}));
