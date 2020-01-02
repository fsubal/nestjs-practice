import React from 'react';

interface Props {
  item: { id: number; name: string } | null;
}

const ItemsShow: Page<Props> = ({ item }) =>
  item ? (
    <>
      <h1>items #{item.id}</h1>
      <p>{item.name}</p>
    </>
  ) : (
    <h1>Not Found</h1>
  );

export default ItemsShow;
