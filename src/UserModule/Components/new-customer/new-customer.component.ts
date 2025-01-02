import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-customer',
  imports: [CommonModule,FormsModule],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {
  newCustomer: any = {}; // New customer data for the form
  isTrue: boolean = false; // Toggle to show/hide the form
  errorMessage: string | null = null; // To show error messages if any

  constructor(private userService: UserService, private router: Router) {}  // Changed to UserService

  ngOnInit(): void {}

  // Method to add a customer
  addCustomer(): void {
    this.userService.addCustomer(this.newCustomer).subscribe({
      next: (response) => {
        alert('Customer added successfully!');
        this.router.navigate(['/list-of-buses']);
        this.isTrue = false; // Close the form
        this.newCustomer = {}; // Reset the form fields
      },
      error: (error) => {
        console.error('Error adding customer:', error);
        alert('Failed to add the customer. Please try again.');
      }
    });
  }

  // Method to show the form to add a customer
  isCreate(): void {
    this.isTrue = true;
  }

  // Method to log out
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    this.router.navigate(['/list-of-buses']); // Navigate to the home path
  }
}