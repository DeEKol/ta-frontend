import type { Dispatch } from "react";
import React from "react";
import { Button, styled } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useCarList } from "@/components/Car/CarList/useCarList";
import type { Car } from "@/types/models";

export interface ICarListProps {
  deleteCar: any;
  cars: Car[];
  setForm: Dispatch<React.SetStateAction<Car>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Car>>;
}

const CarList = ({ deleteCar, cars, setForm, refetch }: ICarListProps) => {
  const { onChangeFormCar, onDeleteCar } = useCarList({
    deleteCar,
    cars,
    setForm,
    refetch,
  });

  return (
    <>
      <h2>Список авто</h2>
      <CarListSC>
        {cars.map((elem) => (
          <li key={elem.id}>
            {elem.id}, {elem.name}, {elem.numberState},{" "}
            {elem.trailerNumberState}
            <Button
              variant="contained"
              type="button"
              onClick={() => elem.id && onChangeFormCar(elem.id)}>
              Изменить
            </Button>
            <Button onClick={() => elem.id && onDeleteCar(elem.id)}>
              Удалить
            </Button>
          </li>
        ))}
      </CarListSC>
    </>
  );
};

const CarListSC = styled("ul")``;

export default React.memo(CarList);
