import { BookingInfo, PassangersInfo } from './booking';
import { FlightItem } from './flight-item';

export interface User {
  id?: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: string;
  pnone: string;
  citizenship?: string | null;
  bookings?: Array<UserBooking> | null;
}

export interface UserStateInterface {
  id?: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: string;
  pnone: string;
  citizenship?: string | null;
  bookings?: Array<UserBooking> | null;
}
export interface UserBooking {
  id?: number;
  payed: boolean;
  bookingInfo: BookingInfo;
  flight: Array<FlightItem>;
  passengers: PassangersInfo;
}
