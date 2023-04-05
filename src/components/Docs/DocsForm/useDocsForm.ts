import type { FormEvent } from "react";

import { useMutation } from "@apollo/client";

import type { IDocsFormProps } from "@/components/Docs/DocsForm/DocsForm";
import { CREATE_DOCS, UPDATE_DOCS } from "@/graphql/mutations/docs";
import type { Docs } from "@/types/models";

export const useDocsForm = ({ form, setForm, refetch }: IDocsFormProps) => {
  const formReset: Docs = {
    id: undefined,
    date: "",
    post: false,
    pay: false,
    contractorId: 0,
    consumerId: 0,
  };

  const [createDocs] = useMutation(CREATE_DOCS);
  const [updateDocs] = useMutation(UPDATE_DOCS);

  const onFormReset = () => {
    setForm(formReset);
  };

  const onSubmitCreateDocs = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createDocs({
      variables: {
        createDocsInput: {
          date: form.date,
          post: form.post,
          pay: form.pay,
          contractorId: form.contractorId,
          consumerId: form.consumerId,
        },
      },
    })
      .then(() => {
        setForm(formReset);
      })
      .then(() => refetch());
  };

  const onSubmitUpdateDocs = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateDocs({
      variables: {
        updateDocsInput: {
          id: form.id,
          date: form.date,
          post: form.post,
          pay: form.pay,
          contractorId: form.contractorId,
          consumerId: form.consumerId,
        },
      },
    })
      .then(() => {
        setForm(formReset);
      })
      .then(() => refetch());
  };

  return { onFormReset, onSubmitCreateDocs, onSubmitUpdateDocs };
};
