import ApolloClient from 'apollo-boost';

export default () => {
  return new ApolloClient({
    uri: '/graphql',
  });
};
