import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router
import { Payment,PaymentStatus } from '../../../models/payments';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments',
  imports:[CommonModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']  // Corrected to styleUrls (plural)
})
export class PaymentsComponent implements OnInit {
  payments: Payment[] = [];
  errorMessage: string | null = null;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getAllPayments();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    this.router.navigate(['']);
  }

  getAllPayments(): void {
    this.adminService.getAllPayments().subscribe(
      (data: Payment[]) => {
        this.payments = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching payments', error);
        this.errorMessage = 'Failed to retrieve payments. Please try again later.';
      }
    );
  }

  getPaymentsByStatus(paymentStatus: PaymentStatus): void {
    this.adminService.getPaymentsByStatus(paymentStatus).subscribe(
      (data: Payment[]) => {
        console.log('Received payments:', data); // Log the received data
        if (Array.isArray(data)) {
          this.payments = data; // Directly assign if it's an array
          this.errorMessage = null;
        } else {
          console.error('Invalid data format', data);
          this.errorMessage = 'Invalid data received from the server.';
        }
      },
      (error) => {
        console.error(`Error fetching payments with status ${paymentStatus}`, error);
        this.errorMessage = `Failed to retrieve payments with status ${paymentStatus}. Please try again later.`;
      }
    );
  }

  searchByStatus(status: string): void {
    if (status) {
      this.getPaymentsByStatus(PaymentStatus[status as keyof typeof PaymentStatus]);
    } else {
      this.getAllPayments(); // Get all payments if no status is selected
    }
  }
}