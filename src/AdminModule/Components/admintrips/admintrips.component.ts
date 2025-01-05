import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../models/trips';
import { Router } from '@angular/router';
import { AdminService } from '../../Services/admin.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-admintrips',
  imports: [CommonModule, FormsModule],
  templateUrl: './admintrips.component.html',
  styleUrls: ['./admintrips.component.css'],
})
export class AdmintripsComponent implements OnInit {
  trip: Trip[] = []; // Array of Trip objects
  filteredTrips: Trip[] = []; // Array to hold filtered trips
  errorMessage: string | null = null;
  isTrue: boolean = false; // Toggle for creating a new trip
  showEditTripForm: boolean = false; // Controls visibility of the edit form
  newTrip: any = {}; // New trip data for the form
  editTrip: any = {}; // Trip data for editing
  tripId: number | null = null; // Stores the Trip ID entered by the user
  tripDate: string = ''; // Stores the selected trip date for search
 
  baseUrl: string = 'http://localhost:8300/api'; // Replace with your backend API URL
 
  constructor(
    private adminService: AdminService,
    private router: Router,
    private httpClient: HttpClient
  ) {}
 
  ngOnInit(): void {
    this.getAllTrips();
  }
 
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    this.router.navigate(['']); // Navigate to the home path
  }
 
  getAllTrips(): void {
    this.adminService.getAllTrips().subscribe(
      (data: Trip[]) => {
        this.trip = data;
        this.filteredTrips = data; // Initialize filteredTrips with all trips initially
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching trips', error);
        this.errorMessage =
          'Failed to retrieve trips. Please try again later.';
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
        this.getAllTrips(); // Refresh trip list after adding
        this.isTrue = false; // Close the form
      },
    });
  }
 
  editTripDetails(trip: any): void {
    this.editTrip = { ...trip }; // Create a copy of the trip to edit
    this.showEditTripForm = true; // Show the edit form
  }
 
  updateTrip(trip: Trip): void {
    this.adminService.updateTrip(trip).subscribe({
      next: (response) => {
        alert('Trip updated successfully!');
        this.getAllTrips(); // Refresh the trip list
        this.showEditTripForm = false; // Hide the edit form
      },
      error: (err) => {
        alert('Error updating trip!');
        console.error(err);
      },
    });
  }
 
  // Search by Trip ID
  searchTrip(): void {
    if (this.tripId !== null) {
      // Filter trips based on the entered tripId
      this.filteredTrips = this.trip.filter((t) => t.id === this.tripId);
 
      if (this.filteredTrips.length === 0) {
        this.errorMessage = 'No trips found for the entered Trip ID.';
      } else {
        this.errorMessage = null;
      }
    } else {
      this.errorMessage = 'Please enter a valid Trip ID.';
      this.filteredTrips = this.trip; // Reset to all trips if no ID is entered
    }
  }
 
  // Search method to filter trips based on selected trip date
  searchTripByDate(): void {
    this.applyDateFilter();
  }
 
  // Method to apply date filter if set
  applyDateFilter(): void {
    if (this.tripDate) {
      const selectedDate = new Date(this.tripDate).toISOString().split('T')[0];
 
      this.filteredTrips = this.trip.filter((t) => {
        const tripDate = new Date(t.tripDate).toISOString().split('T')[0];
        return tripDate === selectedDate;
      });
 
      if (this.filteredTrips.length === 0) {
        this.errorMessage = 'No trips found for the selected date.';
      } else {
        this.errorMessage = null;
      }
    }
  }
 
  // Backend API call to fetch a trip by ID
  getTripById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/trips/${id}`, {
      responseType: 'text',
    });
  }
}