import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";

import TripForm from "@/components/Trip/TripForm/TripForm";
import TripList from "@/components/Trip/TripList/TripList";
import { DELETE_TRIP } from "@/graphql/mutations/trip";
import { GET_ALL_CARS } from "@/graphql/query/car";
import { GET_ALL_COUNTERPARTIES } from "@/graphql/query/counterparty";
import { GET_ALL_DOCS } from "@/graphql/query/docs";
import { GET_ALL_DRIVERS } from "@/graphql/query/driver";
import { GET_ALL_TRIP } from "@/graphql/query/trip";
import { participantInCounterparty } from "@/pages/docs";
import { EQuantityUnit } from "@/types/enum";
import type { Car, Counterparty, Docs, Driver, Trip } from "@/types/models";
import PageContainerSC from "@/UI/SC/PageContainerSC";
import TitleSC from "@/UI/SC/TitleSC";

const TripPage = () => {
  const [form, setForm] = useState<Trip>({
    id: undefined,
    itinerary: "",
    dateFor: "",
    dateTo: "",
    quantity: 0,
    quantityUnit: EQuantityUnit.PIECES,
    price: 0,
    contractorId: 0,
    consumerId: 0,
    docsId: undefined,
    driverId: 0,
    carId: 0,
  });

  const {
    data: allTrip,
    loading: loadingTrip,
    error,
    refetch,
  } = useQuery(GET_ALL_TRIP);
  const { data: allCounterparty, loading: loadingCounterparty } = useQuery(
    GET_ALL_COUNTERPARTIES,
  );
  const { data: allDocs, loading: loadingDocs } = useQuery(GET_ALL_DOCS);
  const { data: allDriver, loading: loadingDriver } = useQuery(GET_ALL_DRIVERS);
  const { data: allCar, loading: loadingCar } = useQuery(GET_ALL_CARS);
  const [deleteTrip] = useMutation(DELETE_TRIP);

  const [trips, setTrips] = useState<Trip[]>([]);
  const [contractors, setContractors] = useState<Counterparty[]>([]);
  const [consumers, setConsumers] = useState<Counterparty[]>([]);
  const [docs, setDocs] = useState<Docs[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    if (
      !loadingTrip &&
      !loadingCounterparty &&
      !loadingDocs &&
      !loadingDriver &&
      !loadingCar
    ) {
      const arrTrips = allTrip.trips;
      setTrips(arrTrips);

      const arrCounterparties = allCounterparty.counterparties;
      setContractors(
        participantInCounterparty(arrCounterparties, "Исполнитель"),
      );
      setConsumers(participantInCounterparty(arrCounterparties, "Заказчик"));
      setForm((prevState) => ({
        ...prevState,
        contractorId: participantInCounterparty(
          arrCounterparties,
          "Исполнитель",
        )[0].id,
        consumerId: participantInCounterparty(arrCounterparties, "Заказчик")[0]
          .id,
      }));

      const arrDocs = allDocs.docs;
      setDocs(arrDocs);
      setForm((prevState) => ({
        ...prevState,
        docsId: arrDocs[0].id,
      }));

      const arrDrivers = allDriver.drivers;
      setDrivers(arrDrivers);
      setForm((prevState) => ({
        ...prevState,
        driverId: arrDrivers[0].id,
      }));

      const arrCars = allCar.cars;
      setCars(arrCars);
      setForm((prevState) => ({
        ...prevState,
        carId: arrCars[0].id,
      }));
    }
  }, [allTrip, allCounterparty, allDocs, allDriver, allCar]);

  return !loadingTrip &&
    !loadingCounterparty &&
    !loadingDocs &&
    !loadingDriver &&
    !loadingCar &&
    form.consumerId != 0 &&
    form.contractorId != 0 &&
    form.docsId != 0 &&
    form.driverId != 0 &&
    form.carId != 0 ? (
    <PageContainerSC>
      <TitleSC>Поездки</TitleSC>
      <TripForm
        form={form}
        contractors={contractors}
        consumers={consumers}
        docs={docs}
        drivers={drivers}
        cars={cars}
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
