import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../../../models/bus';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bus',
  imports: [CommonModule,FormsModule],
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.css'
})
export class BusComponent  implements OnInit 
{
  bus: Bus[] = []; // Array of Customer objects
  errorMessage: string | null = null;
  isTrue: boolean = false; // Toggle for creating a new agency
  showEditBusForm: boolean = false; // Controls visibility of the edit form
  newBus: any = {}; // New agency data for the form
  editBus: any = {}; // Agency data for editing


  constructor(private adminService: AdminService,private router: Router) {}

  ngOnInit(): void {
    this.getAllBuses();
  }


  logout() {
    // Perform any necessary cleanup or logout actions
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    
    // Redirect to the index (home) component
    this.router.navigate(['']);  // Navigate to the home path
  }
  
  getAllBuses(): void {
    this.adminService.getAllBuses().subscribe(
      (data: Bus[]) => {
        this.bus = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching buses', error);
        this.errorMessage = 'Failed to retrieve buses. Please try again later.';
      }
    );
    }

    isCreate(): void {
      this.isTrue = true;
    }
  
    saveNewBuses(): void {
      this.adminService.saveNewBuses(this.newBus).subscribe({
        next: (response) => {
          alert(response);
          this.getAllBuses(); // Refresh agency list after adding
          this.isTrue = false; // Close the form
        }
      });
    }
  
    // Edit agency
    editBusDetails(bus: any): void {
      this.editBus = { ...bus }; // Create a copy of the agency to edit
      this.showEditBusForm = true; // Show the edit form
    }
  
    // Update agency
    updateBus(busDetails: Bus,busId: Number,): void {
      this.adminService.updateBus(busDetails,busId).subscribe({
        next: (response) => {
          alert('Driver updated successfully!');
          this.getAllBuses(); // Refresh the agency list
          this.showEditBusForm = false; // Hide the edit form
        },
        error: (err) => {
          alert('Error updating agency!');
          console.error(err);
        }
      });
    }
  
  }
