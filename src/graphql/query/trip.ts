import { gql } from "@apollo/client";

export const GET_ALL_TRIP = gql`
  query Query {
    trips {
      id
      itinerary
      dateFor
      dateTo
      quantity
      quantityUnit
      price
      contractorId
      consumerId
      docsId
      driverId
      carId
    }
  }
`;
