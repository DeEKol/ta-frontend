import type { Dispatch } from "react";
import React from "react";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useDriverList } from "@/components/Driver/DriverList/useDriverList";
import type { Driver } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import ElemSC from "@/UI/SC/ElemSC";
import ListSC from "@/UI/SC/ListSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

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
      <SubTitleSC>Список водителей</SubTitleSC>
      <ListSC>
        {drivers.map((elem) => (
          <ElemSC key={elem.id}>
            {elem.id}, {elem.firstname}, {elem.lastname}, {elem.surname}
            <ButtonSC
              variant="contained"
              type="button"
              onClick={() => elem.id && onChangeFormDriver(elem.id)}>
              Изменить
            </ButtonSC>
            <ButtonSC onClick={() => elem.id && onDeleteDriver(elem.id)}>
              Удалить
            </ButtonSC>
          </ElemSC>
        ))}
      </ListSC>
    </>
  );
};

export default React.memo(DriverList);
