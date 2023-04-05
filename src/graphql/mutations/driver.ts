import { gql } from "@apollo/client";

export const CREATE_DRIVER = gql`
  mutation Mutation($createDriverInput: CreateDriverInput!) {
    createDriver(createDriverInput: $createDriverInput) {
      id
      firstname
      lastname
      surname
    }
  }
`;

export const UPDATE_DRIVER = gql`
  mutation Mutation($updateDriverInput: UpdateDriverInput!) {
    updateDriver(updateDriverInput: $updateDriverInput) {
      id
      firstname
      lastname
      surname
    }
  }
`;

export const DELETE_DRIVER = gql`
  mutation Mutation($removeDriverId: Int!) {
    removeDriver(id: $removeDriverId) {
      id
      firstname
      lastname
      surname
    }
  }
`;
