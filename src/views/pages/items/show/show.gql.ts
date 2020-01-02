import gql from 'graphql-tag';

export default gql`
  query item($id: ID!) {
    item(id: $id) {
      id
      name
      description
    }
  }
`;
