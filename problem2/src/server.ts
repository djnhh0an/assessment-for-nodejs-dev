import express from "express";
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
const { graphqlHTTP } = require('express-graphql');
import authRouter from "./routes/auth";

const app = express();
app.use(express.json());
app.use(authRouter);

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "test",
    fields: () => ({
      message: { type: GraphQLString, resolve: () => "Hiiiiii!!!!" },
    }),
  }),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
