import React from 'react';

interface Props {
  children: React.ReactChild;
  javascript?: string;
}

export function Document({ children, javascript }: Props) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="marx.min.css" />
        <title>Document</title>
      </head>
      <body>
        <div id="root">{children}</div>
        {javascript && (
          <script type="text/javascript" defer src={javascript}></script>
        )}
      </body>
    </html>
  );
}
