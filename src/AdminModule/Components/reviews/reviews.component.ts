import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../../../models/model';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  imports:[CommonModule,FormsModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent  {
  reviews: Review[] = []; // Array to store all reviews
  selectedReview: Review | null = null; // Store the selected review after search
  errorMessage: string | null = null;
  reviewIdToSearch: number | null = null; // Store the ID to search for

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getAllReviews(); // Fetch all reviews on component initialization
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    this.router.navigate(['']); // Navigate to the home path
  }

  // Method to fetch all reviews
  getAllReviews(): void {
    this.adminService.getAllReviews().subscribe(
      (data: Review[]) => {
        this.reviews = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching reviews', error);
        this.errorMessage = 'Failed to retrieve reviews. Please try again later.';
      }
    );
  }

  // Method to search for a specific review by ID
  getReviewById(): void {
    if (this.reviewIdToSearch != null) {
      this.adminService.getReviewById(this.reviewIdToSearch).subscribe(
        (data: Review) => {
          this.selectedReview = data; // Store the selected review
          this.reviews = [this.selectedReview]; // Replace reviews with only the selected review
          this.errorMessage = null;
        },
        (error) => {
          console.error('Error fetching review by ID', error);
          this.errorMessage = 'Failed to retrieve review. Please try again later.';
        }
      );
    }
  }

  // Method to reset the view and show all reviews again
  resetSearch(): void {
    this.selectedReview = null;
    this.getAllReviews(); // Fetch all reviews again when reset
  }
}