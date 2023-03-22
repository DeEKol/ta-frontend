import type { Dispatch } from "react";
import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import type { Counterparty } from "@/types/models";

interface IAddressBlockProps {
  form: Counterparty;
  setForm: Dispatch<React.SetStateAction<Counterparty>>;
}

const AddressBlock = ({ form, setForm }: IAddressBlockProps) => {
  return (
    <>
      <h3>Юридический адрес</h3>
      <TextField
        required
        value={form.locationIndex}
        label="Индекс"
        onChange={(event) =>
          setForm((prevState) => {
            return { ...prevState, locationIndex: event.target.value };
          })
        }
      />
      <FormControl
        required
        sx={{ minWidth: 120 }}>
        <InputLabel id="subFederalUnit-label">Субъект федерации</InputLabel>
        <Select
          labelId="subFederalUnit-label"
          id="subFederalUnit"
          value={form.subFederalUnit}
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, subFederalUnit: event.target.value };
            })
          }>
          <MenuItem value="Область">Область</MenuItem>
          <MenuItem value="Республика">Республика</MenuItem>
          <MenuItem value="Край">Край</MenuItem>
          <MenuItem value="АО">АО</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        value={form.region}
        label="Регион"
        onChange={(event) =>
          setForm((prevState) => {
            return { ...prevState, region: event.target.value };
          })
        }
      />
      <FormControl
        required
        sx={{ minWidth: 120 }}>
        <InputLabel id="settlement-label">АТЕ</InputLabel>
        <Select
          labelId="settlement-label"
          id="settlement"
          value={form.settlement}
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, settlement: event.target.value };
            })
          }>
          <MenuItem value="Город">Город</MenuItem>
          <MenuItem value="Деревня">Деревня</MenuItem>
          <MenuItem value="Село">Село</MenuItem>
          <MenuItem value="Посёлок">Посёлок</MenuItem>
          <MenuItem value="Станция">Станция</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        value={form.city}
        label="Наименование АТЕ"
        onChange={(event) =>
          setForm((prevState) => {
            return { ...prevState, city: event.target.value };
          })
        }
      />
      <FormControl
        required
        sx={{ minWidth: 120 }}>
        <InputLabel id="streetUnit-label">Улица</InputLabel>
        <Select
          labelId="streetUnit-label"
          id="streetUnit"
          value={form.streetUnit}
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, streetUnit: event.target.value };
            })
          }>
          <MenuItem value="Улица">Улица</MenuItem>
          <MenuItem value="Шоссе">Шоссе</MenuItem>
          <MenuItem value="Проспект">Проспект</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        value={form.street}
        label="Наименование улицы"
        onChange={(event) =>
          setForm((prevState) => {
            return { ...prevState, street: event.target.value };
          })
        }
      />
      <FormControl
        required
        sx={{ minWidth: 120 }}>
        <InputLabel id="houseUnit-label">Строение</InputLabel>
        <Select
          labelId="houseUnit-label"
          id="houseUnit"
          value={form.houseUnit}
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, houseUnit: event.target.value };
            })
          }>
          <MenuItem value="Дом">Дом</MenuItem>
          <MenuItem value="Строение">Строение</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        value={form.house}
        label="Наименование строения"
        onChange={(event) =>
          setForm((prevState) => {
            return { ...prevState, house: event.target.value };
          })
        }
      />
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="apartmentUnit-label">Помещение</InputLabel>
        <Select
          labelId="apartmentUnit-label"
          id="apartmentUnit"
          value={form.apartmentUnit}
          onChange={(event) =>
            setForm((prevState) => {
              return { ...prevState, apartmentUnit: event.target.value };
            })
          }>
          <MenuItem value="Квартира">Квартира</MenuItem>
          <MenuItem value="Офис">Офис</MenuItem>
        </Select>
      </FormControl>
      <TextField
        value={form.apartment}
        label="Наименование помещения"
        onChange={(event) =>
          setForm((prevState) => {
            return { ...prevState, apartment: event.target.value };
          })
        }
      />
    </>
  );
};

export default React.memo(AddressBlock);
