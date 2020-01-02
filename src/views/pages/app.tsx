import React from 'react';

export const App: React.FC<{ initial: unknown }> = ({ initial }) => {
  console.log(initial);

  return (
    <div id="#js-app" data-initial={JSON.stringify(initial)}>
      hello
    </div>
  );
};
