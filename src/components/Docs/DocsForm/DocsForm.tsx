import type { Dispatch } from "react";
import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  styled,
  TextField,
} from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useDocsForm } from "@/components/Docs/DocsForm/useDocsForm";
import type { Docs } from "@/types/models";

export interface IDocsFormProps {
  form: Docs;
  setForm: Dispatch<React.SetStateAction<Docs>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Docs>>;
}

const DocsForm = ({ form, setForm, refetch }: IDocsFormProps) => {
  const { onFormReset, onSubmitCreateDocs, onSubmitUpdateDocs } = useDocsForm({
    form,
    setForm,
    refetch,
  });

  return (
    <>
      <h2>Добавить документы</h2>
      <DocsFormSC onSubmit={!form.id ? onSubmitCreateDocs : onSubmitUpdateDocs}>
        {form.id && (
          <TextField
            disabled
            type="number"
            value={form.id}
            label="id"
          />
        )}
        <label htmlFor="createdDocs">Дата создания: </label>
        <input
          id="createdDocs"
          type="date"
          value={form.date}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setForm((prevState) => {
              return { ...prevState, date: event.target.value };
            })
          }
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={form.post}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setForm((prevState) => {
                    return { ...prevState, post: event.target.checked };
                  })
                }
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Отправлено"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.pay}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setForm((prevState) => {
                    return { ...prevState, pay: event.target.checked };
                  })
                }
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Оплачено"
          />
        </FormGroup>
        <TextField
          required
          type="number"
          value={form.contractorId}
          label="Исполнитель"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, contractorId: Number(event.target.value) };
            })
          }
        />
        <TextField
          required
          type="number"
          value={form.consumerId}
          label="Заказчик"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, consumerId: Number(event.target.value) };
            })
          }
        />
        <Button
          variant="contained"
          type="submit">
          {!form.id ? "Сохранить" : "Изменить"}
        </Button>
        <Button
          variant="contained"
          type="reset"
          onClick={() => onFormReset()}>
          Сбросить
        </Button>
      </DocsFormSC>
    </>
  );
};

const DocsFormSC = styled("form")``;

export default React.memo(DocsForm);