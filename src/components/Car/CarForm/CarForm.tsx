import type { Dispatch } from "react";
import React from "react";
import { Box, TextField } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useCarForm } from "@/components/Car/CarForm/useCarForm";
import type { Car } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import FormSC from "@/UI/SC/FormSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

export interface ICarFormProps {
  form: Car;
  setForm: Dispatch<React.SetStateAction<Car>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Car>>;
}

const CarForm = ({ form, setForm, refetch }: ICarFormProps) => {
  const { onFormReset, onSubmitCreateCar, onSubmitUpdateCar } = useCarForm({
    form,
    setForm,
    refetch,
  });

  return (
    <>
      <SubTitleSC>Добавить авто</SubTitleSC>
      <FormSC onSubmit={!form.id ? onSubmitCreateCar : onSubmitUpdateCar}>
        {form.id && (
          <TextField
            disabled
            type="number"
            value={form.id}
            label="id"
          />
        )}
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}>
          <TextField
            required
            type="text"
            value={form.name}
            label="Название"
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, name: event.target.value };
              })
            }
          />
          <TextField
            required
            type="text"
            value={form.numberState}
            label="Гос. номер"
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, numberState: event.target.value };
              })
            }
          />
          <TextField
            required
            type="text"
            value={form.trailerNumberState}
            label="Гос. номер п/п"
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, trailerNumberState: event.target.value };
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

export default React.memo(CarForm);
