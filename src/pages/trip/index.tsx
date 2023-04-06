import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";

import TripForm from "@/components/Trip/TripForm/TripForm";
import TripList from "@/components/Trip/TripList/TripList";
import { DELETE_TRIP } from "@/graphql/mutations/trip";
import { GET_ALL_TRIP } from "@/graphql/query/trip";
import type { Trip } from "@/types/models";
import PageContainerSC from "@/UI/SC/PageContainerSC";

const TripPage = () => {
  const [form, setForm] = useState<Trip>({
    id: undefined,
    itinerary: "",
    dateFor: "",
    dateTo: "",
    quantity: 0,
    quantityUnit: "",
    price: 0,
    contractorId: 0,
    consumerId: 0,
    docsId: 0,
    driverId: 0,
    carId: 0,
  });

  const { data, loading, error, refetch } = useQuery(GET_ALL_TRIP);
  const [deleteTrip] = useMutation(DELETE_TRIP);

  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    if (!loading) {
      const arr = data.trips;
      setTrips(arr);
    }
  }, [data]);

  return !loading ? (
    <PageContainerSC>
      <TripForm
        form={form}
        setForm={setForm}
        refetch={refetch}
      />
      <TripList
        deleteTrip={deleteTrip}
        trips={trips}
        setForm={setForm}
        refetch={refetch}
      />
    </PageContainerSC>
  ) : (
    <PageContainerSC>{error?.name}</PageContainerSC>
  );
};

export default React.memo(TripPage);
