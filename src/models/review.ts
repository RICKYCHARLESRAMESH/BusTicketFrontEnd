import { Agency } from "./agency";
import { AgencyOffice } from "./agencyoffice";
import { Customer } from "./customer";
import { Driver } from "./driver";
import { Trip } from "./trips";

export interface Review {
    reviewId: number;
    customer: Customer; // Assuming you have a Customer interface
    trip: Trip; // Assuming you have a Trip interface
    agency: Agency; // Assuming you have an Agency interface
    agencyOffice: AgencyOffice; // Assuming you have an AgencyOffice interface
    driver: Driver; // Assuming you have a Driver interface
    rating: number;
    comment: string;
    reviewDate: Date;
  }
  