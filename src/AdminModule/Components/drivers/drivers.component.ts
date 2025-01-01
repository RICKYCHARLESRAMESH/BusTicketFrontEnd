import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../../../models/driver';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-drivers',
  imports: [CommonModule,FormsModule],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent  implements OnInit {
  drivers: Driver[] = []; // Array of Driver objects
  errorMessage: string | null = null;
  isTrue: boolean = false; // Toggle for creating a new driver
  showEditDriverForm: boolean = false; // Controls visibility of the edit form
  newDriver: any = {}; // New driver data for the form
  editDriver: any = {}; // Driver data for editing
  searchDriverId: number = 0; // Driver ID to search
  searchDriverName: string = ''; // Driver Name to search
  searchType: string = 'id'; // Dropdown for search type (id or name)
  searchResult: Driver | null = null; // To hold the search result

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getAllDrivers();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    this.router.navigate(['']);  // Navigate to the home path
  }

  getAllDrivers(): void {
    this.adminService.getAllDrivers().subscribe(
      (data: Driver[]) => {
        this.drivers = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching drivers', error);
        this.errorMessage = 'Failed to retrieve drivers. Please try again later.';
      }
    );
  }

  isCreate(): void {
    this.isTrue = true;
  }

  saveNewDrivers(): void {
    this.adminService.saveNewDrivers(this.newDriver).subscribe({
      next: (response) => {
        alert(response);
        this.getAllDrivers(); // Refresh driver list after adding
        this.isTrue = false; // Close the form
      }
    });
  }

  // Edit driver
  editDriverDetails(driver: any): void {
    this.editDriver = { ...driver }; // Create a copy of the driver to edit
    this.showEditDriverForm = true; // Show the edit form
  }

  // Update driver
  updateDriver(updatedDriver: Driver, driverId: number): void {
    this.adminService.UpdateDrivers(updatedDriver, driverId).subscribe({
      next: (response) => {
        alert('Driver updated successfully!');
        this.getAllDrivers(); // Refresh the driver list
        this.showEditDriverForm = false; // Hide the edit form
      },
      error: (err) => {
        alert('Error updating driver!');
        console.error(err);
      }
    });
  }

  // Search driver by ID
  searchDriverById(): void {
    if (!this.searchDriverId) {
      alert('Please enter a valid Driver ID.');
      return;
    }

    this.adminService.getDriverById(this.searchDriverId).subscribe({
      next: (data) => {
        this.searchResult = JSON.parse(data); // Assuming the API returns JSON as a string
        if (this.searchResult) {
          this.drivers = [this.searchResult]; // Display only the search result
        } else {
          alert(`Driver with ID ${this.searchDriverId} not found.`);
          this.drivers = []; // Clear drivers if not found
        }
      },
      error: (err) => {
        console.error('Error fetching driver:', err);
        alert(`Driver with ID ${this.searchDriverId} not found.`);
        this.drivers = []; // Clear drivers if an error occurs
        this.searchResult = null;
      }
    });
  }

  // Search driver by Name
  searchDriverByName(): void {
    if (!this.searchDriverName.trim()) {
      alert('Please enter a valid Driver Name.');
      return;
    }

    this.adminService.getDriverByName(this.searchDriverName).subscribe({
      next: (data) => {
        this.searchResult = JSON.parse(data); // Assuming the API returns JSON as a string
        if (this.searchResult) {
          this.drivers = [this.searchResult]; // Display only the search result
        } else {
          alert(`Driver with Name "${this.searchDriverName}" not found.`);
          this.drivers = []; // Clear drivers if not found
        }
      },
      error: (err) => {
        console.error('Error fetching driver by name:', err);
        alert(`Driver with Name "${this.searchDriverName}" not found.`);
        this.drivers = []; // Clear drivers if an error occurs
        this.searchResult = null;
      }
    });
  }

  // Search driver based on selected type (ID or Name)
  searchDriver(): void {
    if (this.searchType === 'id') {
      this.searchDriverById();
    } else if (this.searchType === 'name') {
      this.searchDriverByName();
    }
  }
}