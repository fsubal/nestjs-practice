import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props {
  message: string;
}

export default (_props: RouteComponentProps & Props) => <h1>home</h1>;
