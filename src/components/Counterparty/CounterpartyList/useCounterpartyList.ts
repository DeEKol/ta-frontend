import type { ICounterpartyListProps } from "@/components/Counterparty/CounterpartyList/CounterpartyList";

export const useCounterpartyList = ({
  deleteCounterparty,
  counterparties,
  setForm,
  refetch,
}: ICounterpartyListProps) => {
  const onDeleteCounterparty = (id: number) => {
    deleteCounterparty({
      variables: {
        removeCounterpartyId: id,
      },
    }).then(() => refetch());
  };

  const onChangeFormCounterparty = (id: number) => {
    const foundCounterparty = counterparties.find(
      (counterparty) => id === counterparty.id,
    );
    foundCounterparty &&
      setForm({
        id: foundCounterparty.id,
        businessStructure: foundCounterparty.businessStructure,
        name: foundCounterparty.name,
        fullName: foundCounterparty.fullName,
        email: foundCounterparty.email,
        inn: foundCounterparty.inn,
        kpp: foundCounterparty.kpp,
        participant: foundCounterparty.participant,
        businessStructureBank: foundCounterparty.businessStructureBank,
        bank: foundCounterparty.bank,
        bik: foundCounterparty.bik,
        accountOfBank: foundCounterparty.accountOfBank,
        account: foundCounterparty.account,
        locationIndex: foundCounterparty.locationIndex,
        subFederalUnit: foundCounterparty.subFederalUnit,
        region: foundCounterparty.region,
        settlement: foundCounterparty.settlement,
        city: foundCounterparty.city,
        streetUnit: foundCounterparty.streetUnit,
        street: foundCounterparty.street,
        houseUnit: foundCounterparty.houseUnit,
        house: foundCounterparty.house,
        apartmentUnit: foundCounterparty.apartmentUnit,
        apartment: foundCounterparty.apartment,
      });
  };

  return { onDeleteCounterparty, onChangeFormCounterparty };
};
