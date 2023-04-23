export interface FlightItem {
  id: string;
  flightNumber: string;
  departureCity: string;
  destinationCity: string;
  departureDate: string;
  destinationDate: string;
  departureTime: string;
  destinationTime: string;
  flightDuration: string;
  flightFare: number;
  tax: number;
  luggageFare: number;
  seats: number;
}
