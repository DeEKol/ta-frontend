import type { IDriverListProps } from "@/components/Driver/DriverList/DriverList";

export const useDriverList = ({
  deleteDriver,
  drivers,
  setForm,
  refetch,
}: IDriverListProps) => {
  const onChangeFormDriver = (id: number) => {
    const foundDriver = drivers.find((elem) => id === elem.id);
    foundDriver &&
      setForm({
        id: foundDriver.id,
        firstname: foundDriver.firstname,
        lastname: foundDriver.lastname,
        surname: foundDriver.surname,
      });
  };

  const onDeleteDriver = (id: number) => {
    deleteDriver({
      variables: {
        removeDriverId: id,
      },
    }).then(() => refetch());
  };

  return { onChangeFormDriver, onDeleteDriver };
};
