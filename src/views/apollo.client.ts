import ApolloClient, { InMemoryCache } from 'apollo-boost';

export function createApolloClient(initial: any) {
  return new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache().restore(initial),
  });
}
