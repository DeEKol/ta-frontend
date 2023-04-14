import type { Dispatch } from "react";
import React from "react";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useDocsList } from "@/components/Docs/DocsList/useDocsList";
import type { Docs } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import ElemSC from "@/UI/SC/ElemSC";
import ListSC from "@/UI/SC/ListSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

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
      <SubTitleSC>Список документов</SubTitleSC>
      <ListSC>
        {docs.map((elem) => (
          <ElemSC key={elem.id}>
            {elem.id}, {new Date(Number(elem.date)).toLocaleDateString()},{" "}
            {elem.post ? "true" : "false"}, {elem.pay ? "true" : "false"},{" "}
            {elem.contractorId}, {elem.consumerId}
            <ButtonSC
              variant="contained"
              type="button"
              onClick={() => elem.id && onChangeFormDocs(elem.id)}>
              Изменить
            </ButtonSC>
            <ButtonSC onClick={() => elem.id && onDeleteDocs(elem.id)}>
              Удалить
            </ButtonSC>
          </ElemSC>
        ))}
      </ListSC>
    </>
  );
};

export default React.memo(DocsList);
