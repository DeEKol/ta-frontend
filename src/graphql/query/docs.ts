import { gql } from "@apollo/client";

export const GET_ALL_DOCS = gql`
  query Query {
    docs {
      id
      date
      post
      pay
      consumerId
      contractorId
    }
  }
`;
