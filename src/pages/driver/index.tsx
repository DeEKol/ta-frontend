import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";

import DriverForm from "@/components/Driver/DriverForm/DriverForm";
import DriverList from "@/components/Driver/DriverList/DriverList";
import { DELETE_DRIVER } from "@/graphql/mutations/driver";
import { GET_ALL_DRIVERS } from "@/graphql/query/driver";
import type { Driver } from "@/types/models";
import PageContainerSC from "@/UI/SC/PageContainerSC";

const DriverPage = () => {
  const [form, setForm] = useState<Driver>({
    id: undefined,
    firstname: "",
    lastname: "",
    surname: "",
  });

  const { data, loading, error, refetch } = useQuery(GET_ALL_DRIVERS);
  const [deleteDriver] = useMutation(DELETE_DRIVER);

  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    if (!loading) {
      const arr = data.drivers;
      setDrivers(arr);
    }
  }, [data]);

  return !loading ? (
    <PageContainerSC>
      <DriverForm
        form={form}
        setForm={setForm}
        refetch={refetch}
      />
      <DriverList
        deleteDriver={deleteDriver}
        drivers={drivers}
        setForm={setForm}
        refetch={refetch}
      />
    </PageContainerSC>
  ) : (
    <PageContainerSC>{error?.name}</PageContainerSC>
  );
};

export default React.memo(DriverPage);
