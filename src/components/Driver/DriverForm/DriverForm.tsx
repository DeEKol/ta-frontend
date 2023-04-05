import type { Dispatch } from "react";
import React from "react";
import { Button, styled, TextField } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useDriverForm } from "@/components/Driver/DriverForm/useDriverForm";
import type { Driver } from "@/types/models";

export interface IDriverFormProps {
  form: Driver;
  setForm: Dispatch<React.SetStateAction<Driver>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Driver>>;
}

const DriverForm = ({ form, setForm, refetch }: IDriverFormProps) => {
  const { onFormReset, onSubmitCreateDriver, onSubmitUpdateDriver } =
    useDriverForm({
      form,
      setForm,
      refetch,
    });

  return (
    <>
      <h2>Добавить водителя</h2>
      <DriverFormSC
        onSubmit={!form.id ? onSubmitCreateDriver : onSubmitUpdateDriver}>
        {form.id && (
          <TextField
            disabled
            type="number"
            value={form.id}
            label="id"
          />
        )}
        <TextField
          required
          type="text"
          value={form.lastname}
          label="Фамилия"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, lastname: event.target.value };
            })
          }
        />
        <TextField
          required
          type="text"
          value={form.firstname}
          label="Имя"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, firstname: event.target.value };
            })
          }
        />
        <TextField
          required
          type="text"
          value={form.surname}
          label="Отчество"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, surname: event.target.value };
            })
          }
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
      </DriverFormSC>
    </>
  );
};

const DriverFormSC = styled("form")``;

export default React.memo(DriverForm);
