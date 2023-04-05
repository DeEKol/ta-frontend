import { gql } from "@apollo/client";

export const GET_ALL_DRIVERS = gql`
  query Drivers {
    drivers {
      id
      firstname
      lastname
      surname
    }
  }
`;
