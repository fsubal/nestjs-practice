import fs from 'fs';
import path from 'path';
import { SchemaLink } from 'apollo-link-schema';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { buildSchema } from 'graphql';

const schema = buildSchema(
  fs
    .readFileSync(path.resolve(process.cwd(), 'src', 'graphql', 'schema.gql'))
    .toString(),
);

export default () => {
  return new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });
};
