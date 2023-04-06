import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";

import CarForm from "@/components/Car/CarForm/CarForm";
import CarList from "@/components/Car/CarList/CarList";
import { DELETE_CAR } from "@/graphql/mutations/car";
import { GET_ALL_CARS } from "@/graphql/query/car";
import type { Car } from "@/types/models";
import PageContainerSC from "@/UI/SC/PageContainerSC";

const CarPage = () => {
  const [form, setForm] = useState<Car>({
    id: undefined,
    name: "",
    numberState: "",
    trailerNumberState: "",
  });

  const { data, loading, error, refetch } = useQuery(GET_ALL_CARS);
  const [deleteCar] = useMutation(DELETE_CAR);

  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    if (!loading) {
      const arr = data.cars;
      setCars(arr);
    }
  }, [data]);

  return !loading ? (
    <PageContainerSC>
      <CarForm
        form={form}
        setForm={setForm}
        refetch={refetch}
      />
      <CarList
        deleteCar={deleteCar}
        cars={cars}
        setForm={setForm}
        refetch={refetch}
      />
    </PageContainerSC>
  ) : (
    <PageContainerSC>{error?.name}</PageContainerSC>
  );
};

export default React.memo(CarPage);
