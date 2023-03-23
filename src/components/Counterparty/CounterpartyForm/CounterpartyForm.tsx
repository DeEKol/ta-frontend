import type { Dispatch } from "react";
import React from "react";
import { Button, styled } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import AddressBlock from "@/components/Counterparty/CounterpartyForm/AddressBlock/AddressBlock";
import BankBlock from "@/components/Counterparty/CounterpartyForm/BankBlock/BankBlock";
import MainBlock from "@/components/Counterparty/CounterpartyForm/MainBlock/MainBlock";
import { useCounterpartyForm } from "@/components/Counterparty/CounterpartyForm/MainBlock/useCounterpartyForm";
import type { Counterparty } from "@/types/models";

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
      <h2>Добавить контрагента</h2>
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
        <Button
          variant="contained"
          type="submit">
          {!form.id ? "Сохранить" : "Изменить"}
        </Button>
        <Button
          variant="contained"
          type="reset"
          onClick={() => onFormReset()}>
          Сбросить
        </Button>
      </CounterpartyFormSC>
    </>
  );
};

const CounterpartyFormSC = styled("form")``;

export default React.memo(CounterpartyForm);
