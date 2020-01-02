import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './pages/app';
import { ApolloProvider } from 'react-apollo';
import createApolloClient from '../graphql/apollo.client';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector<HTMLDivElement>('#root');
  if (!root) {
    return;
  }

  const app = root.querySelector<HTMLDivElement>('#js-app');
  if (!app) {
    return;
  }

  hydrate(
    <ApolloProvider client={createApolloClient()}>
      <App initial={JSON.parse(app.dataset.initial!)} />
    </ApolloProvider>,
    root,
  );
});
