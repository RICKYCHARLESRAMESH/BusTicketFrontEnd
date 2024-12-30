export interface Payment {
    paymentId: number;
    amount: number;
    paymentDate: string; // ISO date string format
    paymentStatus: 'Success' | 'Failed'; // Enum-like typing
}