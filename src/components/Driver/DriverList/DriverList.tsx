import type { Dispatch } from "react";
import React from "react";
import { Button, styled } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useDriverList } from "@/components/Driver/DriverList/useDriverList";
import type { Driver } from "@/types/models";

export interface IDriverListProps {
  deleteDriver: any;
  drivers: Driver[];
  setForm: Dispatch<React.SetStateAction<Driver>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Driver>>;
}

const DriverList = ({
  deleteDriver,
  drivers,
  setForm,
  refetch,
}: IDriverListProps) => {
  const { onChangeFormDriver, onDeleteDriver } = useDriverList({
    deleteDriver,
    drivers,
    setForm,
    refetch,
  });

  return (
    <>
      <h2>Список водителей</h2>
      <DriverListSC>
        {drivers.map((elem) => (
          <li key={elem.id}>
            {elem.id}, {elem.firstname}, {elem.lastname}, {elem.surname}
            <Button
              variant="contained"
              type="button"
              onClick={() => elem.id && onChangeFormDriver(elem.id)}>
              Изменить
            </Button>
            <Button onClick={() => elem.id && onDeleteDriver(elem.id)}>
              Удалить
            </Button>
          </li>
        ))}
      </DriverListSC>
    </>
  );
};

const DriverListSC = styled("ul")``;

export default React.memo(DriverList);
