import type { FormEvent } from "react";

import { useMutation } from "@apollo/client";

import type { IDriverFormProps } from "@/components/Driver/DriverForm/DriverForm";
import { CREATE_DRIVER, UPDATE_DRIVER } from "@/graphql/mutations/driver";
import type { Driver } from "@/types/models";

export const useDriverForm = ({ form, setForm, refetch }: IDriverFormProps) => {
  const formReset: Driver = {
    id: undefined,
    firstname: "",
    lastname: "",
    surname: "",
  };

  const [createDriver] = useMutation(CREATE_DRIVER);
  const [updateDriver] = useMutation(UPDATE_DRIVER);

  const onFormReset = () => {
    setForm(formReset);
  };

  const onSubmitCreateDriver = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createDriver({
      variables: {
        createDriverInput: {
          firstname: form.firstname,
          lastname: form.lastname,
          surname: form.surname,
        },
      },
    })
      .then(() => {
        setForm(formReset);
      })
      .then(() => refetch());
  };

  const onSubmitUpdateDriver = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateDriver({
      variables: {
        updateDriverInput: {
          id: form.id,
          firstname: form.firstname,
          lastname: form.lastname,
          surname: form.surname,
        },
      },
    })
      .then(() => {
        setForm(formReset);
      })
      .then(() => refetch());
  };

  return { onFormReset, onSubmitCreateDriver, onSubmitUpdateDriver };
};
