import type { Dispatch } from "react";
import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

import type { ApolloQueryResult, OperationVariables } from "@apollo/client";

import { useDocsForm } from "@/components/Docs/DocsForm/useDocsForm";
import type { Docs } from "@/types/models";
import ButtonSC from "@/UI/SC/ButtonSC";
import FormSC from "@/UI/SC/FormSC";
import SubTitleSC from "@/UI/SC/SubTitleSC";

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
      <SubTitleSC>Добавить документы</SubTitleSC>
      <FormSC onSubmit={!form.id ? onSubmitCreateDocs : onSubmitUpdateDocs}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}>
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
                return {
                  ...prevState,
                  contractorId: Number(event.target.value),
                };
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
        </Box>
        <ButtonSC
          variant="contained"
          type="submit">
          {!form.id ? "Сохранить" : "Изменить"}
        </ButtonSC>
        <ButtonSC
          variant="contained"
          type="reset"
          onClick={() => onFormReset()}>
          Сбросить
        </ButtonSC>
      </FormSC>
    </>
  );
};

export default React.memo(DocsForm);
