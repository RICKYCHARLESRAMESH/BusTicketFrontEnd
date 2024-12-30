export interface Bus {
    busId: number;
    agencyOffice: {
        officeId: number;
        officeMail: string;
        officeContactPersonName: string;
        officeContactNumber: string;
    };
    registrationNumber: string;
    capacity: number;
    type: string;
}
