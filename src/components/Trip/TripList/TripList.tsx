import type { Dispatch } from "react";
import React from "react";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useTripList } from "@/components/Trip/TripList/useTripList";
import type { Trip } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import ElemSC from "@/UI/SC/ElemSC";
import ListSC from "@/UI/SC/ListSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

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
      <SubTitleSC>Список авто</SubTitleSC>
      <ListSC>
        {trips.map((elem) => (
          <ElemSC key={elem.id}>
            {elem.id}, {elem.itinerary},{" "}
            {new Date(Number(elem.dateFor)).toLocaleDateString()} -{" "}
            {new Date(Number(elem.dateTo)).toLocaleDateString()},{" "}
            {elem.quantity}, {elem.quantityUnit}, {elem.price},{" "}
            {elem.contractorId}, {elem.consumerId}, {elem.docsId},{" "}
            {elem.driverId}, {elem.carId},{" "}
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
