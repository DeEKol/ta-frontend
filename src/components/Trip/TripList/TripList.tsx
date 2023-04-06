import type { Dispatch } from "react";
import React from "react";
import { Button, styled } from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useTripList } from "@/components/Trip/TripList/useTripList";
import type { Trip } from "@/types/models";

export interface ITripListProps {
  deleteTrip: any;
  trips: Trip[];
  setForm: Dispatch<React.SetStateAction<Trip>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Trip>>;
}

const TripList = ({ deleteTrip, trips, setForm, refetch }: ITripListProps) => {
  const { onChangeFormTrip, onDeleteTrip } = useTripList({
    deleteTrip,
    trips,
    setForm,
    refetch,
  });

  return (
    <>
      <h2>Список авто</h2>
      <TripListSC>
        {trips.map((elem) => (
          <li key={elem.id}>
            {elem.id}, {elem.itinerary},{" "}
            {new Date(Number(elem.dateFor)).toLocaleDateString()} -{" "}
            {new Date(Number(elem.dateTo)).toLocaleDateString()},{" "}
            {elem.quantity}, {elem.quantityUnit}, {elem.price},{" "}
            {elem.contractorId}, {elem.consumerId}, {elem.docsId},{" "}
            {elem.driverId}, {elem.carId},{" "}
            <Button
              variant="contained"
              type="button"
              onClick={() => elem.id && onChangeFormTrip(elem.id)}>
              Изменить
            </Button>
            <Button onClick={() => elem.id && onDeleteTrip(elem.id)}>
              Удалить
            </Button>
          </li>
        ))}
      </TripListSC>
    </>
  );
};

const TripListSC = styled("ul")``;

export default React.memo(TripList);
