import type { FormEvent } from "react";

import { useMutation } from "@apollo/client";

import type { ICarFormProps } from "@/components/Car/CarForm/CarForm";
import { CREATE_CAR, UPDATE_CAR } from "@/graphql/mutations/car";
import type { Car } from "@/types/models";

export const useCarForm = ({ form, setForm, refetch }: ICarFormProps) => {
  const formReset: Car = {
    id: undefined,
    name: "",
    numberState: "",
    trailerNumberState: "",
  };

  const [createCar] = useMutation(CREATE_CAR);
  const [updateCar] = useMutation(UPDATE_CAR);

  const onFormReset = () => {
    setForm(formReset);
  };

  const onSubmitCreateCar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createCar({
      variables: {
        createCarInput: {
          name: form.name,
          numberState: form.numberState,
          trailerNumberState: form.trailerNumberState,
        },
      },
    })
      .then(() => {
        setForm(formReset);
      })
      .then(() => refetch());
  };

  const onSubmitUpdateCar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateCar({
      variables: {
        updateCarInput: {
          id: form.id,
          name: form.name,
          numberState: form.numberState,
          trailerNumberState: form.trailerNumberState,
        },
      },
    })
      .then(() => {
        setForm(formReset);
      })
      .then(() => refetch());
  };

  return { onFormReset, onSubmitCreateCar, onSubmitUpdateCar };
};
