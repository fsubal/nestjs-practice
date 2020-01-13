import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './app';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector<HTMLDivElement>('#root');
  if (!root) {
    return;
  }

  const app = root.querySelector<HTMLDivElement>('#js-app');
  if (!app) {
    return;
  }

  const apolloState = JSON.parse(app.dataset.apollo!);

  const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache().restore(apolloState.ROOT_QUERY),
  });

  hydrate(
    <ApolloProvider client={client}>
      <App
        initial={JSON.parse(app.dataset.initial!)}
        apolloState={apolloState}
      />
    </ApolloProvider>,
    root,
  );
});
