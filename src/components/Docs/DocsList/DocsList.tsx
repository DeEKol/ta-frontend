import type { Dispatch } from "react";
import React from "react";
import { Button, styled } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useDocsList } from "@/components/Docs/DocsList/useDocsList";
import type { Docs } from "@/types/models";

export interface IDocsListProps {
  deleteDocs: any;
  docs: Docs[];
  setForm: Dispatch<React.SetStateAction<Docs>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Docs>>;
}

const DocsList = ({ deleteDocs, docs, setForm, refetch }: IDocsListProps) => {
  const { onChangeFormDocs, onDeleteDocs } = useDocsList({
    deleteDocs,
    docs,
    setForm,
    refetch,
  });

  return (
    <>
      <h2>Список документов</h2>
      <CounterpartyListSC>
        {docs.map((elem) => (
          <li key={elem.id}>
            {elem.id}, {new Date(Number(elem.date)).toLocaleDateString()},{" "}
            {elem.post ? "true" : "false"}, {elem.pay ? "true" : "false"},{" "}
            {elem.contractorId}, {elem.consumerId}
            <Button
              variant="contained"
              type="button"
              onClick={() => elem.id && onChangeFormDocs(elem.id)}>
              Изменить
            </Button>
            <Button onClick={() => elem.id && onDeleteDocs(elem.id)}>
              Удалить
            </Button>
          </li>
        ))}
      </CounterpartyListSC>
    </>
  );
};

const CounterpartyListSC = styled("ul")``;

export default React.memo(DocsList);
