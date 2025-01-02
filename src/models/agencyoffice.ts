import { Agency } from './agency'; // Assuming you have an Agency interface
import { Address } from './address'; // Assuming you have an Address interface

export interface AgencyOffice {
  officeId: number;
  agency: Agency; // Assuming Agency is another interface
  officeMail: string;
  officeContactPersonName: string;
  officeContactNumber: string;
  officeAddress: Address; // Assuming Address is another interface
}
