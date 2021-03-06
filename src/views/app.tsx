import React from 'react';
import { Router, Link } from '@reach/router';

import AppIndex from './pages/app/index';
import ItemsIndex from './pages/items/index/index';
import ItemsShow from './pages/items/show/show';

interface Props {
  initial: any;
  apolloState?: any;
}

export const App: React.FC<Props> = ({ initial, apolloState }) => {
  return (
    <div
      id="js-app"
      data-initial={JSON.stringify(initial)}
      data-apollo={JSON.stringify(apolloState)}
    >
      <Layout>
        You can see <pre>{JSON.stringify(initial)}</pre>
        <Router>
          <AppIndex path="/" {...initial} />
          <ItemsIndex path="/items" {...initial} />
          <ItemsShow path="/items/:id" {...initial} />
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
          <li>
            <Link to="/items/1">Item #1</Link>
          </li>
          <li>
            <Link to="/items/10">Item #10</Link>
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
