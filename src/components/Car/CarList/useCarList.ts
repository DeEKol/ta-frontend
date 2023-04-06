import type { ICarListProps } from "@/components/Car/CarList/CarList";

export const useCarList = ({
  deleteCar,
  cars,
  setForm,
  refetch,
}: ICarListProps) => {
  const onChangeFormCar = (id: number) => {
    const foundCar = cars.find((car) => id === car.id);
    foundCar &&
      setForm({
        id: foundCar.id,
        name: foundCar.name,
        numberState: foundCar.numberState,
        trailerNumberState: foundCar.trailerNumberState,
      });
  };

  const onDeleteCar = (id: number) => {
    deleteCar({
      variables: {
        removeCarId: id,
      },
    }).then(() => refetch());
  };

  return { onChangeFormCar, onDeleteCar };
};
