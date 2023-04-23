import { Injectable } from '@angular/core';
import { BookingInfo, PassangersInfo } from 'src/app/shared/models/booking';
import { FlightItem } from 'src/app/shared/models/flight-item';
import { Nullable } from 'src/app/shared/models/types';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookingInformation: Nullable<BookingInfo> = {
    roundTrip: true,
    departureCity: 'Moscow',
    destinationCity: 'Baku',
    departureDate: '18.04.2023',
    returnDate: '20.04.2023',
    passengers: {
      adults: 2,
      child: 0,
      infants: 0,
    },
  };

  private passangersInfomation: Nullable<PassangersInfo> = null;

  private selectedFlights: Array<FlightItem> = [];

  public get bookingInfo(): Nullable<BookingInfo> {
    return this.bookingInformation;
  }

  public set bookingInfo(info: Nullable<BookingInfo>) {
    this.bookingInformation = info;
  }

  public get passengersInfo(): Nullable<PassangersInfo> {
    return this.passangersInfomation;
  }

  public set passengersInfo(info: Nullable<PassangersInfo>) {
    this.passangersInfomation = info;
  }

  public addFlight(flight: FlightItem): void {
    this.selectedFlights.push(flight);
  }

  public deleteFlight(flight: FlightItem): void {
    this.selectedFlights = this.selectedFlights.filter(
      item => item.id !== flight.id
    );
  }
}
