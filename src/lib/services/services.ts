import type { Car, Counterparty, Driver } from "@/types/models";

type FindArrElemType = Counterparty | Driver | Car;

export const findElemForId = <T extends FindArrElemType>(
  arr: T[],
  id: number | undefined,
): T | undefined => {
  return arr.find((elem: T) => elem.id === id);
};
