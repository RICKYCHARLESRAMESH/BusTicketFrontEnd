import { Bus } from "./bus";
import { Driver } from "./driver";
import { RouteModel } from "./route";

export interface Trip {
    id: number; // Trip ID
    departureTime: string; // Departure time in ISO 8601 format (e.g., '2024-12-31T10:30:00')
    availableSeats: number; // Number of available seats
    fare: number; // Trip fare
    boardingAddressId: number; // Boarding address ID
    droppingAddressId: number; // Dropping address ID
    arrivalTime: string; // Arrival time in ISO 8601 format
    tripDate: string; // Trip date in ISO 8601 format
    route: RouteModel; // Associated route
    bus: Bus; // Associated bus
    driver?: Driver; // Optional driver
  }


 