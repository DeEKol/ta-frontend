import type { Dispatch } from "react";
import React from "react";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useTripList } from "@/components/Trip/TripList/useTripList";
import { findElemForId } from "@/lib/services/services";
import type { Car, Counterparty, Driver, Trip } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import ElemSC from "@/UI/SC/ElemSC";
import ListSC from "@/UI/SC/ListSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

export interface ITripListProps {
  deleteTrip: any;
  trips: Trip[];
  contractors: Counterparty[];
  consumers: Counterparty[];
  drivers: Driver[];
  cars: Car[];
  setForm: Dispatch<React.SetStateAction<Trip>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Trip>>;
}

const TripList = ({
  deleteTrip,
  trips,
  contractors,
  consumers,
  drivers,
  cars,
  setForm,
  refetch,
}: ITripListProps) => {
  const { onChangeFormTrip, onDeleteTrip } = useTripList({
    deleteTrip,
    trips,
    contractors,
    consumers,
    drivers,
    cars,
    setForm,
    refetch,
  });

  return (
    <>
      <SubTitleSC>Список авто</SubTitleSC>
      <ListSC>
        {trips.map((elem) => (
          <ElemSC key={elem.id}>
            id: {elem.id}, № док-ов: {elem.docsId} <br />
            Заказчик:{" "}
            {findElemForId<Counterparty>(contractors, elem.contractorId)?.name},
            Исполнитель:{" "}
            {findElemForId<Counterparty>(consumers, elem.consumerId)?.name},
            <br />
            Маршрут: {elem.itinerary},{" "}
            {new Date(Number(elem.dateFor)).toLocaleDateString()} -{" "}
            {new Date(Number(elem.dateTo)).toLocaleDateString()}, Кол-во:{" "}
            {elem.quantity} {elem.quantityUnit}, {elem.price}р., <br />
            Водитель: {findElemForId<Driver>(drivers, elem.driverId)?.lastname},
            Авто: {findElemForId<Car>(cars, elem.carId)?.name}{" "}
            {findElemForId<Car>(cars, elem.carId)?.numberState},{" "}
            <ButtonSC
              variant="contained"
              type="button"
              onClick={() => elem.id && onChangeFormTrip(elem.id)}>
              Изменить
            </ButtonSC>
            <ButtonSC onClick={() => elem.id && onDeleteTrip(elem.id)}>
              Удалить
            </ButtonSC>
          </ElemSC>
        ))}
      </ListSC>
    </>
  );
};

export default React.memo(TripList);
