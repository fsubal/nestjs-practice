import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './pages/app';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector<HTMLDivElement>('#js-app');
  if (!app) {
    return;
  }

  hydrate(<App initial={JSON.parse(app.dataset.initial!)} />, app);
});
