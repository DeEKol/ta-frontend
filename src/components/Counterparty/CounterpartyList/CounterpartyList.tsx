import type { Dispatch } from "react";
import React from "react";
import { Button, styled } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useCounterpartyList } from "@/components/Counterparty/CounterpartyList/useCounterpartyList";
import type { Counterparty } from "@/types/models";

export interface ICounterpartyListProps {
  deleteCounterparty: any;
  counterparties: Counterparty[];
  setForm: Dispatch<React.SetStateAction<Counterparty>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Counterparty>>;
}

const CounterpartyList = ({
  deleteCounterparty,
  counterparties,
  setForm,
  refetch,
}: ICounterpartyListProps) => {
  const { onDeleteCounterparty, onChangeFormCounterparty } =
    useCounterpartyList({
      deleteCounterparty,
      counterparties,
      setForm,
      refetch,
    });

  return (
    <>
      <h2>Список контрагентов</h2>
      <CounterpartyListSC>
        {counterparties.map((elem: Counterparty) => (
          <li key={elem.id}>
            Информация: {elem.id}, {elem.businessStructure}, {elem.name},{" "}
            {elem.fullName}, {elem.email}, {elem.inn}, {elem.kpp},{" "}
            {elem.participant}; Банк. реквизиты: {elem.businessStructureBank},{" "}
            {elem.bank}, {elem.bik},{elem.accountOfBank}, {elem.account}; Адрес:{" "}
            {elem.locationIndex},{elem.subFederalUnit}, {elem.region},{" "}
            {elem.settlement}, {elem.city}, {elem.streetUnit}, {elem.street},{" "}
            {elem.houseUnit}, {elem.house}, {elem.apartmentUnit},{" "}
            {elem.apartment}
            <Button
              variant="contained"
              type="button"
              onClick={() => elem.id && onChangeFormCounterparty(elem.id)}>
              Изменить
            </Button>
            <Button onClick={() => elem.id && onDeleteCounterparty(elem.id)}>
              Удалить
            </Button>
          </li>
        ))}
      </CounterpartyListSC>
    </>
  );
};

const CounterpartyListSC = styled("ul")``;

export default React.memo(CounterpartyList);
