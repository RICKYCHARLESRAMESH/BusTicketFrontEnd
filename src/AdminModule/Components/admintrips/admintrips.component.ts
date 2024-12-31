import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../models/trips';
import { Router } from '@angular/router';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-admintrips',
  imports: [CommonModule,FormsModule],
  templateUrl: './admintrips.component.html',
  styleUrl: './admintrips.component.css'
})
export class AdmintripsComponent implements OnInit {
  trip: Trip[] = []; // Array of Agency objects
  errorMessage: string | null = null;
  isTrue: boolean = false; // Toggle for creating a new agency
  showEditTripForm: boolean = false; // Controls visibility of the edit form
  newTrip: any = {}; // New agency data for the form
  editTrip: any = {}; // Agency data for editing

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTrips();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    this.router.navigate(['']);  // Navigate to the home path
  }

  getAllTrips(): void {
    this.adminService.getAllTrips().subscribe(
      (data: Trip[]) => {
        this.trip = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching agencies', error);
        this.errorMessage = 'Failed to retrieve agencies. Please try again later.';
      }
    );
  }

  isCreate(): void {
    this.isTrue = true;
  }

  saveNewTrip(): void {
    this.adminService.saveNewTrip(this.newTrip).subscribe({
      next: (response) => {
        alert(response);
        this.getAllTrips(); // Refresh agency list after adding
        this.isTrue = false; // Close the form
      }
    });
  }

  // Edit agency
  editTripDetails(trip: any): void {
    this.editTrip = { ...trip }; // Create a copy of the agency to edit
    this.showEditTripForm = true; // Show the edit form
  }

  // Update agency
  updateTrip(trip: Trip): void {
    this.adminService.updateTrip(trip).subscribe({
      next: (response) => {
        alert('Agency updated successfully!');
        this.getAllTrips(); // Refresh the agency list
        this.showEditTripForm = false; // Hide the edit form
      },
      error: (err) => {
        alert('Error updating agency!');
        console.error(err);
      }
    });
  }
}
 {

}
