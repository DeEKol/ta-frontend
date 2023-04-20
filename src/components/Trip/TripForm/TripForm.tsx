import type { Dispatch } from "react";
import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useTripForm } from "@/components/Trip/TripForm/useTripForm";
import { EQuantityUnit } from "@/types/enum";
import type { Car, Counterparty, Docs, Driver, Trip } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import FormSC from "@/UI/SC/FormSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

export interface ITripFormProps {
  form: Trip;
  contractors: Counterparty[];
  consumers: Counterparty[];
  docs: Docs[];
  drivers: Driver[];
  cars: Car[];
  setForm: Dispatch<React.SetStateAction<Trip>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Trip>>;
}

const TripForm = ({
  form,
  contractors,
  consumers,
  docs,
  drivers,
  cars,
  setForm,
  refetch,
}: ITripFormProps) => {
  const { onFormReset, onSubmitCreateTrip, onSubmitUpdateTrip } = useTripForm({
    form,
    contractors,
    consumers,
    docs,
    drivers,
    cars,
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
          <FormControl
            required
            sx={{ minWidth: 120 }}>
            <InputLabel id="quantityUnit-label">Ед. изм.</InputLabel>
            <Select
              labelId="quantityUnit-label"
              id="quantityUnit"
              value={form.quantityUnit}
              onChange={(event) =>
                setForm((prevState) => {
                  return { ...prevState, quantityUnit: event.target.value };
                })
              }>
              <MenuItem value={EQuantityUnit.PIECES}>
                {EQuantityUnit.PIECES}
              </MenuItem>
              <MenuItem value={EQuantityUnit.HOURS}>
                {EQuantityUnit.HOURS}
              </MenuItem>
            </Select>
          </FormControl>
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
          <FormControl
            required
            sx={{ minWidth: 120 }}>
            <InputLabel id="contractor-label">Исполнитель</InputLabel>
            <Select
              labelId="contractor-label"
              id="contractor"
              value={form.contractorId}
              onChange={(event) =>
                setForm((prevState) => {
                  return {
                    ...prevState,
                    contractorId: Number(event.target.value),
                  };
                })
              }>
              {contractors.map((elem) => (
                <MenuItem
                  key={elem.id}
                  value={elem.id}>
                  {elem.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            required
            sx={{ minWidth: 120 }}>
            <InputLabel id="consumer-label">Заказчик</InputLabel>
            <Select
              labelId="consumer-label"
              id="consumer"
              value={form.consumerId}
              onChange={(event) =>
                setForm((prevState) => {
                  return {
                    ...prevState,
                    consumerId: Number(event.target.value),
                  };
                })
              }>
              {consumers.map((elem) => (
                <MenuItem
                  key={elem.id}
                  value={elem.id}>
                  {elem.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            required
            sx={{ minWidth: 120 }}>
            <InputLabel id="docs-label">Принадлежность к документам</InputLabel>
            <Select
              labelId="docs-label"
              id="docs"
              value={form.docsId}
              onChange={(event) =>
                setForm((prevState) => {
                  return {
                    ...prevState,
                    docsId: Number(event.target.value),
                  };
                })
              }>
              {docs.map((elem) => (
                <MenuItem
                  key={elem.id}
                  value={elem.id}>
                  {elem.id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            required
            sx={{ minWidth: 120 }}>
            <InputLabel id="driver-label">Водитель</InputLabel>
            <Select
              labelId="driver-label"
              id="driver"
              value={form.driverId}
              onChange={(event) =>
                setForm((prevState) => {
                  return {
                    ...prevState,
                    driverId: Number(event.target.value),
                  };
                })
              }>
              {drivers.map((elem) => (
                <MenuItem
                  key={elem.id}
                  value={elem.id}>
                  {elem.lastname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            required
            sx={{ minWidth: 120 }}>
            <InputLabel id="car-label">Авто</InputLabel>
            <Select
              labelId="car-label"
              id="car"
              value={form.carId}
              onChange={(event) =>
                setForm((prevState) => {
                  return {
                    ...prevState,
                    carId: Number(event.target.value),
                  };
                })
              }>
              {cars.map((elem) => (
                <MenuItem
                  key={elem.id}
                  value={elem.id}>
                  {elem.name}, {elem.numberState}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
