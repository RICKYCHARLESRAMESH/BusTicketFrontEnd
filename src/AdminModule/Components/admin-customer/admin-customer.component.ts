import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-customer',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-customer.component.html',
  styleUrl: './admin-customer.component.css'
})
export class AdminCustomerComponent implements OnInit {
  customers: Customer[] = []; // Array of Customer objects
  errorMessage: string | null = null;

  // Define properties for filtering by email, phone, or ID
  email: string = '';
  phone: string = '';
  customerId: number | null = null;

  constructor(private adminService: AdminService,private router: Router) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  // Fetch all customers
  getAllCustomers(): void {
    this.adminService.getAllCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching customers', error);
        this.errorMessage = 'Failed to retrieve customers. Please try again later.';
      }
    );
  }

  // Get customers by email
  getCustomersByEmail(): void {
    if (this.email) {
      this.adminService.getCustomersByEmail(this.email).subscribe(
        (data: Customer[]) => {
          this.customers = data;
          this.errorMessage = null;
        },
        (error) => {
          console.error('Error fetching customers by email', error);
          this.errorMessage = 'Failed to retrieve customers by email. Please try again later.';
        }
      );
    }
  }

  // Get customers by phone
  getCustomersByPhone(): void {
    if (this.phone) {
      this.adminService.getCustomersByPhone(this.phone).subscribe(
        (data: Customer[]) => {
          this.customers = data;
          this.errorMessage = null;
        },
        (error) => {
          console.error('Error fetching customers by phone', error);
          this.errorMessage = 'Failed to retrieve customers by phone. Please try again later.';
        }
      );
    }
  }

  // Get customer by customerId
  getCustomerById(): void {
    if (this.customerId !== null) {
      this.adminService.getCustomerById(this.customerId).subscribe(
        (data: Customer) => {
          this.customers = [data]; // Assuming you want to display a single customer
          this.errorMessage = null;
        },
        (error) => {
          console.error('Error fetching customer by ID', error);
          this.errorMessage = 'Failed to retrieve customer by ID. Please try again later.';
        }
      );
    }
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['']);
  }
}