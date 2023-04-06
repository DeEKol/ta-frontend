import type { FormEvent } from "react";

import { useMutation } from "@apollo/client";

import type { ITripFormProps } from "@/components/Trip/TripForm/TripForm";
import { CREATE_TRIP, UPDATE_TRIP } from "@/graphql/mutations/trip";
import type { Trip } from "@/types/models";

export const useTripForm = ({ form, setForm, refetch }: ITripFormProps) => {
  const formReset: Trip = {
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
  };

  const [createTrip] = useMutation(CREATE_TRIP);
  const [updateTrip] = useMutation(UPDATE_TRIP);

  const onFormReset = () => {
    setForm(formReset);
  };

  const onSubmitCreateTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTrip({
      variables: {
        createTripInput: {
          itinerary: form.itinerary,
          dateFor: form.dateFor,
          dateTo: form.dateTo,
          quantity: form.quantity,
          quantityUnit: form.quantityUnit,
          price: form.price,
          contractorId: form.contractorId,
          consumerId: form.consumerId,
          docsId: form.docsId,
          driverId: form.driverId,
          carId: form.carId,
        },
      },
    })
      .then(() => {
        setForm(formReset);
      })
      .then(() => refetch());
  };

  const onSubmitUpdateTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTrip({
      variables: {
        updateTripInput: {
          id: form.id,
          itinerary: form.itinerary,
          dateFor: form.dateFor,
          dateTo: form.dateTo,
          quantity: form.quantity,
          quantityUnit: form.quantityUnit,
          price: form.price,
          contractorId: form.contractorId,
          consumerId: form.consumerId,
          docsId: form.docsId,
          driverId: form.driverId,
          carId: form.carId,
        },
      },
    })
      .then(() => {
        setForm(formReset);
      })
      .then(() => refetch());
  };

  return { onFormReset, onSubmitCreateTrip, onSubmitUpdateTrip };
};
