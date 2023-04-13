import type { Dispatch } from "react";
import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import type { Counterparty } from "@/types/models";
import BlockTitleSC from "@/UI/SC/BlockTitleSC";
import BlockWrapperSC from "@/UI/SC/BlockWrapperSC";

interface IMainBlockProps {
  form: Counterparty;
  setForm: Dispatch<React.SetStateAction<Counterparty>>;
}

const MainBlock = ({ form, setForm }: IMainBlockProps) => {
  return (
    <BlockWrapperSC>
      <BlockTitleSC>Основная информация</BlockTitleSC>
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
        <FormControl
          required
          sx={{ minWidth: 120 }}>
          <InputLabel id="businessStructure-label">ОПФ</InputLabel>
          <Select
            labelId="businessStructure-label"
            id="businessStructure"
            value={form.businessStructure}
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, businessStructure: event.target.value };
              })
            }>
            <MenuItem value="ИП">ИП</MenuItem>
            <MenuItem value="ООО">ООО</MenuItem>
            <MenuItem value="АО">АО</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          value={form.name}
          label="Имя"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, name: event.target.value };
            })
          }
        />
        <TextField
          required
          value={form.fullName}
          label="Полное имя"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, fullName: event.target.value };
            })
          }
        />
        <TextField
          required
          value={form.email}
          label="Электронная почта"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, email: event.target.value };
            })
          }
        />
        <TextField
          required
          value={form.inn}
          label="ИНН"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, inn: event.target.value };
            })
          }
        />
        <TextField
          required
          value={form.kpp}
          label="КПП"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, kpp: event.target.value };
            })
          }
        />
        <FormControl
          required
          sx={{ minWidth: 120 }}>
          <InputLabel id="participant-label">Участник</InputLabel>
          <Select
            labelId="participant-label"
            id="participant"
            value={form.participant}
            onChange={(event) =>
              setForm((prevState) => {
                return { ...prevState, participant: event.target.value };
              })
            }>
            <MenuItem value="Заказчик">Заказчик</MenuItem>
            <MenuItem value="Исполнитель">Исполнитель</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </BlockWrapperSC>
  );
};

export default React.memo(MainBlock);
