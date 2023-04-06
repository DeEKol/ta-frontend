import type { ITripListProps } from "@/components/Trip/TripList/TripList";

export const useTripList = ({
  deleteTrip,
  trips,
  setForm,
  refetch,
}: ITripListProps) => {
  const onChangeFormTrip = (id: number) => {
    const foundTrip = trips.find((trip) => id === trip.id);
    foundTrip &&
      setForm({
        id: foundTrip.id,
        itinerary: foundTrip.itinerary,
        dateFor: new Date(Number(foundTrip.dateFor))
          .toISOString()
          .split("T")[0],
        dateTo: new Date(Number(foundTrip.dateTo)).toISOString().split("T")[0],
        quantity: foundTrip.quantity,
        quantityUnit: foundTrip.quantityUnit,
        price: foundTrip.price,
        contractorId: foundTrip.contractorId,
        consumerId: foundTrip.consumerId,
        docsId: foundTrip.docsId,
        driverId: foundTrip.driverId,
        carId: foundTrip.carId,
      });
  };

  const onDeleteTrip = (id: number) => {
    deleteTrip({
      variables: {
        removeTripId: id,
      },
    }).then(() => refetch());
  };

  return { onChangeFormTrip, onDeleteTrip };
};
