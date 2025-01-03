import { Booking } from './booking';
import { Customer } from './customer';

export enum PaymentStatus {
  Success = 'Success',
  Failed = 'Failed',
}

export interface Payment {
  paymentId: number;
  booking: Booking | null;
  customer: Customer | null;
  amount: number; // BigDecimal is represented as number in TypeScript
  paymentDate: string; // LocalDateTime is typically represented as an ISO string in TypeScript
  paymentStatus: PaymentStatus;
}