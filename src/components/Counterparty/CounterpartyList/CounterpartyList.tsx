import type { Dispatch } from "react";
import React from "react";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useCounterpartylistStyles } from "@/components/Counterparty/CounterpartyList/CounterpartyList.styles";
import { useCounterpartyList } from "@/components/Counterparty/CounterpartyList/useCounterpartyList";
import type { Counterparty } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import ElemSC from "@/UI/SC/ElemSC";
import ListSC from "@/UI/SC/ListSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

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
      <SubTitleSC>Список контрагентов</SubTitleSC>
      <ListSC>
        {counterparties.map((elem: Counterparty) => (
          <ElemSC key={elem.id}>
            <CounterpartyElemInfoSC>
              id: {elem.id} <br />
              Информация: {elem.businessStructure}, {elem.name}, {elem.fullName}
              , {elem.email}, {elem.inn}, {elem.kpp}, {elem.participant}
            </CounterpartyElemInfoSC>
            <CounterpartyElemBankSC>
              Банк. реквизиты: {elem.businessStructureBank}, {elem.bank},{" "}
              {elem.bik},{elem.accountOfBank}, {elem.account}
            </CounterpartyElemBankSC>
            <CounterpartyElemAddressSC>
              Адрес: {elem.locationIndex},{elem.subFederalUnit}, {elem.region},{" "}
              {elem.settlement}, {elem.city}, {elem.streetUnit}, {elem.street},{" "}
              {elem.houseUnit}, {elem.house}, {elem.apartmentUnit},{" "}
              {elem.apartment}
            </CounterpartyElemAddressSC>
            <CounterpartyElemButtonsSC>
              <ButtonSC
                variant="contained"
                type="button"
                onClick={() => elem.id && onChangeFormCounterparty(elem.id)}>
                Изменить
              </ButtonSC>
              <ButtonSC
                onClick={() => elem.id && onDeleteCounterparty(elem.id)}>
                Удалить
              </ButtonSC>
            </CounterpartyElemButtonsSC>
          </ElemSC>
        ))}
      </ListSC>
    </>
  );
};

const {
  CounterpartyElemInfoSC,
  CounterpartyElemAddressSC,
  CounterpartyElemBankSC,
  CounterpartyElemButtonsSC,
} = useCounterpartylistStyles();

export default React.memo(CounterpartyList);
