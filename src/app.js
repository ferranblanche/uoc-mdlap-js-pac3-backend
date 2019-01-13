import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './graphql/schema';
import resolver from './graphql/resolver';

const app = express();

app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));