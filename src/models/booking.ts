import { Trip } from "./trips";
import { Payment } from "./payments";

export enum BookingStatus {
  Available = 'Available',
  Booked = 'Booked',
}

export interface Booking {
  bookingId: number;
  trip: Trip | null; // Represents the many-to-one relationship (optional or nullable)
  payment: Payment | null; // Represents the one-to-one relationship (optional or nullable)
  seatNumber: number;
  status: BookingStatus;
}
