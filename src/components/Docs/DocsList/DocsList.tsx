import type { Dispatch } from "react";
import React from "react";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useDocsList } from "@/components/Docs/DocsList/useDocsList";
import { findElemForId } from "@/lib/services/services";
import type { Counterparty, Docs } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import ElemSC from "@/UI/SC/ElemSC";
import ListSC from "@/UI/SC/ListSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

export interface IDocsListProps {
  deleteDocs: any;
  docs: Docs[];
  contractors: Counterparty[];
  consumers: Counterparty[];
  setForm: Dispatch<React.SetStateAction<Docs>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Docs>>;
}

const DocsList = ({
  deleteDocs,
  docs,
  contractors,
  consumers,
  setForm,
  refetch,
}: IDocsListProps) => {
  const { onChangeFormDocs, onDeleteDocs } = useDocsList({
    deleteDocs,
    docs,
    contractors,
    consumers,
    setForm,
    refetch,
  });

  return (
    <>
      <SubTitleSC>Список документов</SubTitleSC>
      <ListSC>
        {docs.map((elem) => (
          <ElemSC key={elem.id}>
            id: {elem.id} <br /> Заказчик:{" "}
            {findElemForId<Counterparty>(contractors, elem.contractorId)?.name},{" "}
            Исполнитель:{" "}
            {findElemForId<Counterparty>(consumers, elem.consumerId)?.name}{" "}
            <br />
            {new Date(Number(elem.date)).toLocaleDateString()}, Отправлено:{" "}
            {elem.post ? "true" : "false"}, Оплачено:{" "}
            {elem.pay ? "true" : "false"},{" "}
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
