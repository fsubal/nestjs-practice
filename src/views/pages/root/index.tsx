import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props {
  message: string;
}

const RootIndex: Page<Props> = (_props: RouteComponentProps & Props) => (
  <h1>home</h1>
);

export default RootIndex;
