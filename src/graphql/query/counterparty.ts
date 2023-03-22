import { gql } from "@apollo/client";

export const GET_ALL_COUNTERPARTIES = gql`
  query Query {
    counterparties {
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
