import React from 'react';

interface Props {
  initial: unknown;
}

export const App: React.FC<Props> = ({ initial }) => {
  return (
    <>
      <div id="#js-app" data-initial={JSON.stringify(initial)}>
        You can see <pre>{JSON.stringify(initial)}</pre>
      </div>
    </>
  );
};
