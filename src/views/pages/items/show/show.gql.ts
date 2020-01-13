import gql from 'graphql-tag';
import reactApollo from 'react-apollo';
import { Item } from 'src/graphql';

interface Result {
  item: Pick<Item, 'id' | 'name' | 'description'>;
}

const QUERY = gql`
  query item($id: ID!) {
    item(id: $id) {
      id
      name
      description
    }
  }
`;

export default QUERY;

interface Variables {
  id: number;
}

export function useQuery(variables: Variables) {
  return reactApollo.useQuery<Result>(QUERY, {
    variables,
  });
}
