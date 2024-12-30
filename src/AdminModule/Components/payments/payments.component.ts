import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router
import { Payment } from '../../../models/payments';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments',
  imports:[CommonModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']  // Corrected to styleUrls (plural)
})
export class PaymentsComponent implements OnInit 
{
  payments: Payment[] = []; // Array of Customer objects
  errorMessage: string | null = null;

  constructor(private adminService: AdminService,private router: Router) {}

  ngOnInit(): void {
    this.getAllPayments();
  }


  logout() {
    // Perform any necessary cleanup or logout actions
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    
    // Redirect to the index (home) component
    this.router.navigate(['']);  // Navigate to the home path
  }
  
  getAllPayments(): void {
    this.adminService.getAllPayments().subscribe(
      (data: Payment[]) => {
        this.payments = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching customers', error);
        this.errorMessage = 'Failed to retrieve customers. Please try again later.';
      }
    );
    }}