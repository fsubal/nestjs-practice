import React from 'react';
import { Router, Link } from '@reach/router';

import RootIndex from './root/index';
import ItemsIndex from './items/index';

interface Props {
  initial: unknown;
}

export const App: React.FC<Props> = ({ initial }) => {
  return (
    <div id="js-app" data-initial={JSON.stringify(initial)}>
      <Layout>
        You can see <pre>{JSON.stringify(initial)}</pre>
        <Router>
          <RootIndex path="/" />
          <ItemsIndex path="/items" />
        </Router>
      </Layout>
    </div>
  );
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
        <footer>&copy; yay</footer>
      </main>
    </>
  );
}
