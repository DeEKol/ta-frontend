import { gql } from "@apollo/client";

export const CREATE_TRIP = gql`
  mutation Mutation($createTripInput: CreateTripInput!) {
    createTrip(createTripInput: $createTripInput) {
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

export const UPDATE_TRIP = gql`
  mutation Mutation($updateTripInput: UpdateTripInput!) {
    updateTrip(updateTripInput: $updateTripInput) {
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

export const DELETE_TRIP = gql`
  mutation RemoveTrip($removeTripId: Int!) {
    removeTrip(id: $removeTripId) {
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
