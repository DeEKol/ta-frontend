import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query Query {
    users {
      username
      password
      id
      email
    }
  }
`;
