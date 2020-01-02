import React from 'react';

interface Props {
  items: { name: string }[];
}

const ItemsIndex: Page<Props> = (_props: PageProps<Props>) => <h1>items</h1>;

export default ItemsIndex;
