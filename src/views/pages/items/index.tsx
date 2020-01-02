import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props {
  items: { name: string }[];
}

export default (_props: RouteComponentProps & Props) => <h1>items</h1>;
