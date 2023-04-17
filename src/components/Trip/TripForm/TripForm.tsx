import type { Dispatch } from "react";
import React from "react";
import { Box, TextField } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useTripForm } from "@/components/Trip/TripForm/useTripForm";
import type { Trip } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import FormSC from "@/UI/SC/FormSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

export interface ITripFormProps {
  form: Trip;
  setForm: Dispatch<React.SetStateAction<Trip>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Trip>>;
}

const TripForm = ({ form, setForm, refetch }: ITripFormProps) => {
  const { onFormReset, onSubmitCreateTrip, onSubmitUpdateTrip } = useTripForm({
    form,
    setForm,
    refetch,
  });

  return (
    <>
      <SubTitleSC>Добавить поездку</SubTitleSC>
      <FormSC onSubmit={!form.id ? onSubmitCreateTrip : onSubmitUpdateTrip}>
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
            value={form.itinerary}
            label="Маршрут"
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, itinerary: event.target.value };
              })
            }
          />
          <label htmlFor="dateFor">Дата начала: </label>
          <input
            id="dateFor"
            type="date"
            value={form.dateFor}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setForm((prevState) => {
                return { ...prevState, dateFor: event.target.value };
              })
            }
          />
          <label htmlFor="dateTo">Дата конца: </label>
          <input
            id="dateTo"
            type="date"
            value={form.dateTo}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setForm((prevState) => {
                return { ...prevState, dateTo: event.target.value };
              })
            }
          />
          <TextField
            required
            type="number"
            value={form.quantity}
            label="Кол-во"
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, quantity: Number(event.target.value) };
              })
            }
          />
          <TextField
            required
            type="text"
            value={form.quantityUnit}
            label="Ед. изм."
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, quantityUnit: event.target.value };
              })
            }
          />
          <TextField
            required
            type="number"
            value={form.price}
            label="Цена"
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, price: Number(event.target.value) };
              })
            }
          />
          <TextField
            required
            type="number"
            value={form.contractorId}
            label="Исполнитель"
            onChange={(event) =>
              setForm((prevState) => {
                return {
                  ...prevState,
                  contractorId: Number(event.target.value),
                };
              })
            }
          />
          <TextField
            required
            type="number"
            value={form.consumerId}
            label="Заказчик"
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, consumerId: Number(event.target.value) };
              })
            }
          />
          <TextField
            required
            type="number"
            value={form.docsId}
            label="Принадлежность к документам"
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, docsId: Number(event.target.value) };
              })
            }
          />
          <TextField
            required
            type="number"
            value={form.driverId}
            label="Водитель"
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, driverId: Number(event.target.value) };
              })
            }
          />
          <TextField
            required
            type="number"
            value={form.carId}
            label="Авто"
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, carId: Number(event.target.value) };
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

export default React.memo(TripForm);
