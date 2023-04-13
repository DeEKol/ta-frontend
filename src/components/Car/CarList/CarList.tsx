import type { Dispatch } from "react";
import React from "react";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useCarList } from "@/components/Car/CarList/useCarList";
import type { Car } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import ElemSC from "@/UI/SC/ElemSC";
import ListSC from "@/UI/SC/ListSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

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
      <SubTitleSC>Список авто</SubTitleSC>
      <ListSC>
        {cars.map((elem) => (
          <ElemSC key={elem.id}>
            {elem.id}, {elem.name}, {elem.numberState},{" "}
            {elem.trailerNumberState}
            <ButtonSC
              variant="contained"
              type="button"
              onClick={() => elem.id && onChangeFormCar(elem.id)}>
              Изменить
            </ButtonSC>
            <ButtonSC onClick={() => elem.id && onDeleteCar(elem.id)}>
              Удалить
            </ButtonSC>
          </ElemSC>
        ))}
      </ListSC>
    </>
  );
};

export default React.memo(CarList);
