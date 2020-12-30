import 'dotenv/config'
import "reflect-metadata";
import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql'

import { graphqlUploadExpress } from 'graphql-upload';
import { mongoose } from '@typegoose/typegoose';

export default async function server() {
  const app = express()
  const port = process.env.PORT || 4001

  await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

  const schema = await buildSchema({
    resolvers: [__dirname + '/resolvers/**/*.resolver.{ts,js}'],
  });
  const server: ApolloServer = new ApolloServer({
    uploads: false,
    schema,
    playground: process.env.NODE_ENV === "development",
    context: async ({ req }) => {
      const { authorization = "" } = req.headers;
      const [type, token] = authorization.split(" ");
      return {
        token,
      };
    },
  });

  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app, path: "/graphql" });

  app.get('/', (_, res) => {
    console.log('GET / ')
    res.status(200).json({
      message: 'Hello TypeGraphql'
    })
  })


  app.listen(port, () => console.log(`Running on port ${port}`))
}

server();
