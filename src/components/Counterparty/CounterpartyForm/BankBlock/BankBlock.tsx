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

interface IBankBlockProps {
  form: Counterparty;
  setForm: Dispatch<React.SetStateAction<Counterparty>>;
}

const BankBlock = ({ form, setForm }: IBankBlockProps) => {
  return (
    <BlockWrapperSC>
      <BlockTitleSC>Банковские реквизиты</BlockTitleSC>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}>
        <FormControl
          required
          sx={{ minWidth: 120 }}>
          <InputLabel id="businessStructureBank-label">ОПФ Банка</InputLabel>
          <Select
            labelId="businessStructureBank-label"
            id="businessStructureBank"
            value={form.businessStructureBank}
            onChange={(event) =>
              setForm((prevState) => {
                return {
                  ...prevState,
                  businessStructureBank: event.target.value,
                };
              })
            }>
            <MenuItem value="ИП">ИП</MenuItem>
            <MenuItem value="ООО">ООО</MenuItem>
            <MenuItem value="АО">АО</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          value={form.bank}
          label="Банк"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, bank: event.target.value };
            })
          }
        />
        <TextField
          required
          value={form.bik}
          label="БИК"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, bik: event.target.value };
            })
          }
        />
        <TextField
          required
          value={form.accountOfBank}
          label="Счёт банка"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, accountOfBank: event.target.value };
            })
          }
        />
        <TextField
          required
          value={form.account}
          label="Счёт"
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, account: event.target.value };
            })
          }
        />
      </Box>
    </BlockWrapperSC>
  );
};

export default React.memo(BankBlock);
