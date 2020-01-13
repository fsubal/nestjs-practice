import React from 'react';
import { useQuery } from './show.gql';
import { Item } from '../../../../graphql';

interface Props {
  item: Item;
}

const ItemsShow: Page<Props> = props => {
  const { loading, error, data } = useQuery({ id: Number(props.item.id) });

  if (loading) {
    return <div>loading ...</div>;
  }

  if (error) {
    return (
      <div>
        failed: <pre>{JSON.stringify(error)}</pre>
      </div>
    );
  }

  return data?.item ? (
    <>
      <h1>items #{data.item.id}</h1>
      <p>{data.item.name}</p>
    </>
  ) : (
    <h1>Not Found</h1>
  );
};

export default ItemsShow;
