import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../../../models/review';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  imports:[CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

  reviews: Review[] = []; // Array of Customer objects
  errorMessage: string | null = null;
  
  constructor(private adminService: AdminService,private router: Router) {}

  ngOnInit(): void {
    this.getAllReviews();
  }


  logout() {
    // Perform any necessary cleanup or logout actions
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    
    // Redirect to the index (home) component
    this.router.navigate(['']);  // Navigate to the home path
  }
  
  getAllReviews(): void {
    this.adminService.getAllReviews().subscribe(
      (data: Review[]) => {
        this.reviews = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching customers', error);
        this.errorMessage = 'Failed to retrieve customers. Please try again later.';
      }
    );
    }}
