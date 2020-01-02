import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './pages/app';
import { ApolloProvider } from 'react-apollo';
import { createApolloClient } from './apollo.client';

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
  console.log(apolloState);

  hydrate(
    <ApolloProvider client={createApolloClient(apolloState)}>
      <App
        initial={JSON.parse(app.dataset.initial!)}
        apolloState={apolloState}
      />
    </ApolloProvider>,
    root,
  );
});
