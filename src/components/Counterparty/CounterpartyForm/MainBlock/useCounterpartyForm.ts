import type { FormEvent } from "react";

import { useMutation } from "@apollo/client";

import type { ICounterpartyFormProps } from "@/components/Counterparty/CounterpartyForm/CounterpartyForm";
import {
  CREATE_COUNTERPARTY,
  UPDATE_COUNTERPARTY,
} from "@/graphql/mutations/counteparty";
import type { Counterparty } from "@/types/models";

export const useCounterpartyForm = ({
  form,
  setForm,
  refetch,
}: ICounterpartyFormProps) => {
  const [createCounterparty] = useMutation(CREATE_COUNTERPARTY);
  const [updateCounterparty] = useMutation(UPDATE_COUNTERPARTY);

  const formReset: Counterparty = {
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
  };

  const onFormReset = () => {
    setForm(formReset);
  };

  const onSubmitCreateCounterparty = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createCounterparty({
      variables: {
        createCounterpartyInput: {
          businessStructure: form.businessStructure,
          name: form.name,
          fullName: form.fullName,
          email: form.email,
          inn: form.inn,
          kpp: form.kpp,
          participant: form.participant,
          businessStructureBank: form.businessStructureBank,
          bank: form.bank,
          bik: form.bik,
          accountOfBank: form.accountOfBank,
          account: form.account,
          locationIndex: form.locationIndex,
          subFederalUnit: form.subFederalUnit,
          region: form.region,
          settlement: form.settlement,
          city: form.city,
          streetUnit: form.streetUnit,
          street: form.street,
          houseUnit: form.houseUnit,
          house: form.house,
          apartmentUnit: form.apartmentUnit,
          apartment: form.apartment,
        },
      },
    })
      .then(() => {
        setForm(formReset);
      })
      .then(() => refetch());
  };

  const onSubmitUpdateCounterparty = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateCounterparty({
      variables: {
        updateCounterpartyInput: {
          id: form.id,
          businessStructure: form.businessStructure,
          name: form.name,
          fullName: form.fullName,
          email: form.email,
          inn: form.inn,
          kpp: form.kpp,
          participant: form.participant,
          businessStructureBank: form.businessStructureBank,
          bank: form.bank,
          bik: form.bik,
          accountOfBank: form.accountOfBank,
          account: form.account,
          locationIndex: form.locationIndex,
          subFederalUnit: form.subFederalUnit,
          region: form.region,
          settlement: form.settlement,
          city: form.city,
          streetUnit: form.streetUnit,
          street: form.street,
          houseUnit: form.houseUnit,
          house: form.house,
          apartmentUnit: form.apartmentUnit,
          apartment: form.apartment,
        },
      },
    })
      .then(() => {
        setForm(formReset);
      })
      .then(() => refetch());
  };

  return {
    onFormReset,
    onSubmitCreateCounterparty,
    onSubmitUpdateCounterparty,
  };
};
