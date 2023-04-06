import { gql } from "@apollo/client";

export const CREATE_CAR = gql`
  mutation Mutation($createCarInput: CreateCarInput!) {
    createCar(createCarInput: $createCarInput) {
      id
      name
      numberState
      trailerNumberState
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation Mutation($updateCarInput: UpdateCarInput!) {
    updateCar(updateCarInput: $updateCarInput) {
      id
      name
      numberState
      trailerNumberState
    }
  }
`;

export const DELETE_CAR = gql`
  mutation Mutation($removeCarId: Int!) {
    removeCar(id: $removeCarId) {
      id
      name
      numberState
      trailerNumberState
    }
  }
`;
