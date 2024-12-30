import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-customer',
  imports: [CommonModule],
  templateUrl: './admin-customer.component.html',
  styleUrl: './admin-customer.component.css'
})
export class AdminCustomerComponent implements OnInit {
  customers: Customer[] = []; // Array of Customer objects
  errorMessage: string | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

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
}