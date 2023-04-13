import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/client";

import CounterpartyForm from "@/components/Counterparty/CounterpartyForm/CounterpartyForm";
import CounterpartyList from "@/components/Counterparty/CounterpartyList/CounterpartyList";
import { DELETE_COUNTERPARTY } from "@/graphql/mutations/counteparty";
import { GET_ALL_COUNTERPARTIES } from "@/graphql/query/counterparty";
import type { Counterparty } from "@/types/models";
import PageContainerSC from "@/UI/SC/PageContainerSC";
import TitleSC from "@/UI/SC/TitleSC";

const CounterpartyPage = () => {
  const [form, setForm] = useState<Counterparty>({
    id: undefined,
    businessStructure: "ИП",
    name: "",
    fullName: "",
    email: "",
    inn: "",
    kpp: "",
    participant: "Заказчик",
    businessStructureBank: "ООО",
    bank: "",
    bik: "",
    accountOfBank: "",
    account: "",
    locationIndex: "",
    subFederalUnit: "Область",
    region: "",
    settlement: "Город",
    city: "",
    streetUnit: "Улица",
    street: "",
    houseUnit: "Дом",
    house: "",
    apartmentUnit: "",
    apartment: "",
  });

  const { data, loading, error, refetch } = useQuery(GET_ALL_COUNTERPARTIES);
  const [deleteCounterparty] = useMutation(DELETE_COUNTERPARTY);

  const [counterparties, setCounterparties] = useState<Counterparty[]>([]);

  useEffect(() => {
    if (!loading) {
      const arr = data.counterparties;
      setCounterparties(arr);
    }
  }, [data]);

  return !loading ? (
    <PageContainerSC>
      <TitleSC>Контрагенты</TitleSC>
      <CounterpartyForm
        form={form}
        setForm={setForm}
        refetch={refetch}
      />
      <CounterpartyList
        deleteCounterparty={deleteCounterparty}
        counterparties={counterparties}
        setForm={setForm}
        refetch={refetch}
      />
    </PageContainerSC>
  ) : (
    <PageContainerSC>{error?.name}</PageContainerSC>
  );
};

export default CounterpartyPage;
