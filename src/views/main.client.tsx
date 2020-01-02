import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './pages/app';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector<HTMLDivElement>('#root');
  if (!root) {
    return;
  }

  const app = root.querySelector<HTMLDivElement>('#js-app');
  if (!app) {
    return;
  }

  const client = new ApolloClient({
    uri: '/graphql',
  });

  hydrate(
    <ApolloProvider client={client}>
      <App initial={JSON.parse(app.dataset.initial!)} />
    </ApolloProvider>,
    root,
  );
});
