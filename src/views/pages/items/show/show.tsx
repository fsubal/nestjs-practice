import React from 'react';
import { useQuery } from 'react-apollo';
import QUERY from './show.gql';

interface Props {
  item: {
    id: number;
    name: string;
    description: string;
  };
}

const ItemsShow: Page<Props> = props => {
  const { loading, error, data } = useQuery<{
    item: {
      id: number;
      name: string;
      description: string;
    };
  }>(QUERY, {
    variables: { id: props.item.id },
  });

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

  return data ? (
    <>
      <h1>items #{data.item.id}</h1>
      <p>{data.item.name}</p>
    </>
  ) : (
    <h1>Not Found</h1>
  );
};

export default ItemsShow;
