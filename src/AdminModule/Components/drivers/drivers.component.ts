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
export class DriversComponent implements OnInit 
{
  drivers: Driver[] = []; // Array of Customer objects
  errorMessage: string | null = null;
  isTrue: boolean = false; // Toggle for creating a new agency
  showEditDriverForm: boolean = false; // Controls visibility of the edit form
  newDriver: any = {}; // New agency data for the form
  editDriver: any = {}; // Agency data for editing


  constructor(private adminService: AdminService,private router: Router) {}

  ngOnInit(): void {
    this.getAllDrivers();
  }


  logout() {
    // Perform any necessary cleanup or logout actions
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    
    // Redirect to the index (home) component
    this.router.navigate(['']);  // Navigate to the home path
  }
  
  getAllDrivers(): void {
    this.adminService.getAllDrivers().subscribe(
      (data: Driver[]) => {
        this.drivers = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching customers', error);
        this.errorMessage = 'Failed to retrieve customers. Please try again later.';
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
          this.getAllDrivers(); // Refresh agency list after adding
          this.isTrue = false; // Close the form
        }
      });
    }
  
    // Edit agency
    editDriverDetails(driver: any): void {
      this.editDriver = { ...driver }; // Create a copy of the agency to edit
      this.showEditDriverForm = true; // Show the edit form
    }
  
    // Update agency
    updateDriver(updatedDriver:Driver,driverId:number): void {
      this.adminService.UpdateDrivers(updatedDriver,driverId).subscribe({
        next: (response) => {
          alert('Driver updated successfully!');
          this.getAllDrivers(); // Refresh the agency list
          this.showEditDriverForm = false; // Hide the edit form
        },
        error: (err) => {
          alert('Error updating agency!');
          console.error(err);
        }
      });
    }
  
  }
