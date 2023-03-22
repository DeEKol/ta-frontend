import { gql } from "@apollo/client";

export const CREATE_COUNTERPARTY = gql`
  mutation Mutation($createCounterpartyInput: CreateCounterpartyInput!) {
    createCounterparty(createCounterpartyInput: $createCounterpartyInput) {
      businessStructure
      name
      fullName
      email
      inn
      kpp
      participant
      businessStructureBank
      bank
      bik
      accountOfBank
      account
      locationIndex
      subFederalUnit
      region
      settlement
      city
      streetUnit
      street
      houseUnit
      house
      apartmentUnit
      apartment
    }
  }
`;

export const UPDATE_COUNTERPARTY = gql`
  mutation Mutation($updateCounterpartyInput: UpdateCounterpartyInput!) {
    updateCounterparty(updateCounterpartyInput: $updateCounterpartyInput) {
      id
      businessStructure
      name
      fullName
      email
      inn
      kpp
      participant
      businessStructureBank
      bank
      bik
      accountOfBank
      account
      locationIndex
      subFederalUnit
      region
      settlement
      city
      streetUnit
      street
      houseUnit
      house
      apartmentUnit
      apartment
    }
  }
`;

export const DELETE_COUNTERPARTY = gql`
  mutation Mutation($removeCounterpartyId: Int!) {
    removeCounterparty(id: $removeCounterpartyId) {
      id
      businessStructure
      name
      fullName
      email
      inn
      kpp
      participant
      businessStructureBank
      bank
      bik
      accountOfBank
      account
      locationIndex
      subFederalUnit
      region
      settlement
      city
      streetUnit
      street
      houseUnit
      house
      apartmentUnit
      apartment
    }
  }
`;
