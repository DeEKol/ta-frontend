import type { Dispatch } from "react";
import React from "react";
import { styled } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import AddressBlock from "@/components/Counterparty/CounterpartyForm/AddressBlock/AddressBlock";
import BankBlock from "@/components/Counterparty/CounterpartyForm/BankBlock/BankBlock";
import MainBlock from "@/components/Counterparty/CounterpartyForm/MainBlock/MainBlock";
import { useCounterpartyForm } from "@/components/Counterparty/CounterpartyForm/useCounterpartyForm";
import type { Counterparty } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

export interface ICounterpartyFormProps {
  form: Counterparty;
  setForm: Dispatch<React.SetStateAction<Counterparty>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Counterparty>>;
}

const CounterpartyForm = ({
  form,
  setForm,
  refetch,
}: ICounterpartyFormProps) => {
  const {
    onFormReset,
    onSubmitCreateCounterparty,
    onSubmitUpdateCounterparty,
  } = useCounterpartyForm({ form, setForm, refetch });

  return (
    <>
      <SubTitleSC>Добавить контрагента</SubTitleSC>
      <CounterpartyFormSC
        onSubmit={
          !form.id ? onSubmitCreateCounterparty : onSubmitUpdateCounterparty
        }>
        <MainBlock
          form={form}
          setForm={setForm}
        />
        <BankBlock
          form={form}
          setForm={setForm}
        />
        <AddressBlock
          form={form}
          setForm={setForm}
        />
        <ButtonSC
          variant="contained"
          type="submit">
          {!form.id ? "Сохранить" : "Изменить"}
        </ButtonSC>
        <ButtonSC
          variant="contained"
          type="reset"
          onClick={() => onFormReset()}>
          Сбросить
        </ButtonSC>
      </CounterpartyFormSC>
    </>
  );
};

const CounterpartyFormSC = styled("form")`
  margin-bottom: 25px;
`;

export default React.memo(CounterpartyForm);
