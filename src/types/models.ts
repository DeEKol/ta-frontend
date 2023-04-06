export type Counterparty = {
  id?: number;
  businessStructure: string;
  name: string;
  fullName: string;
  email: string;
  inn: string;
  kpp: string;
  participant: string;
  businessStructureBank: string;
  bank: string;
  bik: string;
  accountOfBank: string;
  account: string;
  locationIndex: string;
  subFederalUnit: string;
  region: string;
  settlement: string;
  city: string;
  streetUnit: string;
  street: string;
  houseUnit: string;
  house: string;
  apartmentUnit?: string;
  apartment?: string;
};

export type Docs = {
  id?: number;
  date: string;
  post: boolean;
  pay: boolean;
  contractorId: number | undefined;
  consumerId: number | undefined;
};

export type Driver = {
  id?: number;
  firstname: string;
  lastname: string;
  surname: string;
};

export type Car = {
  id?: number;
  name: string;
  numberState: string;
  trailerNumberState: string;
};

export type Trip = {
  id?: number;
  itinerary: string;
  dateFor: string;
  dateTo: string;
  quantity: number;
  quantityUnit: string;
  price: number;
  contractorId: number;
  consumerId: number;
  docsId: number;
  driverId: number;
  carId: number;
};
