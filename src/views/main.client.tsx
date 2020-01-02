import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './pages/app';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector<HTMLDivElement>('#root');
  if (!root) {
    return;
  }

  const app = root.querySelector<HTMLDivElement>('#js-app');
  if (!app) {
    return;
  }

  hydrate(<App initial={JSON.parse(app.dataset.initial!)} />, root);
});
