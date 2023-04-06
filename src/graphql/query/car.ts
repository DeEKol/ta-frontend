import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
  query Query {
    cars {
      id
      name
      numberState
      trailerNumberState
    }
  }
`;
