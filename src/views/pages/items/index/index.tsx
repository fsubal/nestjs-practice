import React from 'react';
import { Item } from '../../../../graphql';

interface Props {
  items: Item[];
}

const ItemsIndex: Page<Props> = _props => <h1>items</h1>;

export default ItemsIndex;
