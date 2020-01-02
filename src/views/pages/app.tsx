import React from 'react';

export const App: React.FC<{ initial: unknown }> = ({ initial }) => {
  return (
    <div id="#js-app" data-initial={JSON.stringify(initial)}>
      You can see <pre>{JSON.stringify(initial)}</pre>
    </div>
  );
};
