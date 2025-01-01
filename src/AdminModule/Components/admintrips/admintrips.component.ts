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
  trip: Trip[] = []; // Array of Trip objects
  errorMessage: string | null = null;
  isTrue: boolean = false; // Toggle for creating a new trip
  showEditTripForm: boolean = false; // Controls visibility of the edit form
  newTrip: any = {}; // New trip data for the form
  editTrip: any = {}; // Trip data for editing
  routeId: any = ''; // Route ID for fetching route by ID
  fromCity: string = ''; // From city for searching routes by from city
  toCity: string = ''; // To city for searching routes by to city
  route: any = {}; // To store route details

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
        console.error('Error fetching trips', error);
        this.errorMessage = 'Failed to retrieve trips. Please try again later.';
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
      }
    });
  }

  // Edit trip
  editTripDetails(trip: any): void {
    this.editTrip = { ...trip }; // Create a copy of the trip to edit
    this.showEditTripForm = true; // Show the edit form
  }

  // Update trip
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
      }
    });
  }

  // Fetch route by ID
  getRouteById(): void {
    if (this.routeId) {
      this.adminService.getRouteById(this.routeId).subscribe({
        next: (response) => {
          this.route = response;
          console.log('Route details:', this.route);
        },
        error: (err) => {
          console.error('Error fetching route by ID:', err);
          alert('Error fetching route details.');
        }
      });
    } else {
      alert('Please enter a valid Route ID.');
    }
  }

  // Fetch routes by from city
  getRoutesByFromCity(): void {
    if (this.fromCity) {
      this.adminService.getRoutesByFromCity(this.fromCity).subscribe({
        next: (response) => {
          this.route = response;
          console.log('Routes from city:', this.route);
        },
        error: (err) => {
          console.error('Error fetching routes by from city:', err);
          alert('Error fetching routes.');
        }
      });
    } else {
      alert('Please enter a valid From City.');
    }
  }

  // Fetch routes by to city
  getRoutesByToCity(): void {
    if (this.toCity) {
      this.adminService.getRoutesByToCity(this.toCity).subscribe({
        next: (response) => {
          this.route = response;
          console.log('Routes to city:', this.route);
        },
        error: (err) => {
          console.error('Error fetching routes by to city:', err);
          alert('Error fetching routes.');
        }
      });
    } else {
      alert('Please enter a valid To City.');
    }
  }
}