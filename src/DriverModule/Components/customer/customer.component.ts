
import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../Services/driver.service';
import { Customer } from '../../../models/customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports:[CommonModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = []; // Array of Customer objects
  errorMessage: string | null = null;

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    this.driverService.getAllCustomers().subscribe(
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

