import type { Dispatch } from "react";
import React from "react";
import { Box, TextField } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useDriverForm } from "@/components/Driver/DriverForm/useDriverForm";
import type { Driver } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import FormSC from "@/UI/SC/FormSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

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
      <SubTitleSC>Добавить водителя</SubTitleSC>
      <FormSC onSubmit={!form.id ? onSubmitCreateDriver : onSubmitUpdateDriver}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}>
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
        </Box>
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
      </FormSC>
    </>
  );
};

export default React.memo(DriverForm);
