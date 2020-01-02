import React from 'react';

interface Props {
  initial: unknown;
}

export const App: React.FC<Props> = ({ initial }) => {
  return (
    <div id="js-app" data-initial={JSON.stringify(initial)}>
      <nav>
        <ul>
          <li>
            <a href="#">Test App</a>
          </li>
          <li>Home</li>
          <li>About us</li>
        </ul>
      </nav>
      <main>
        You can see <pre>{JSON.stringify(initial)}</pre>
        <footer>&copy; yay</footer>
      </main>
    </div>
  );
};
