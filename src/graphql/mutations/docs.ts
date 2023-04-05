import { gql } from "@apollo/client";

export const CREATE_DOCS = gql`
  mutation Mutation($createDocsInput: CreateDocsInput!) {
    createDocs(createDocsInput: $createDocsInput) {
      id
      date
      post
      pay
      consumerId
      contractorId
    }
  }
`;

export const UPDATE_DOCS = gql`
  mutation Mutation($updateDocsInput: UpdateDocsInput!) {
    updateDocs(updateDocsInput: $updateDocsInput) {
      id
      date
      post
      pay
      consumerId
      contractorId
    }
  }
`;

export const DELETE_DOCS = gql`
  mutation Mutation($removeDocsId: Int!) {
    removeDocs(id: $removeDocsId) {
      id
      date
      post
      pay
      consumerId
      contractorId
    }
  }
`;
