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
export class BusComponent implements OnInit {
  bus: Bus[] = []; // Array of Bus objects
  errorMessage: string | null = null;
  isTrue: boolean = false; // Toggle for creating a new bus
  showEditBusForm: boolean = false; // Controls visibility of the edit form
  newBus: any = {}; // New bus data for the form
  editBus: any = {}; // Bus data for editing

  constructor(private adminService: AdminService, private router: Router) {}

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

  

  updateBus(busId: number): void {
    this.adminService.updateBus(this.editBus, busId).subscribe(
      (response) => {
        console.log('Bus updated successfully:', response);
        this.showEditBusForm = false;
        this.editBus = {};
        this.getAllBuses(); // Refresh the list of buses
      },
      (error) => {
        console.error('Error updating bus:', error);
        this.errorMessage = 'Failed to update the bus. Please try again.';
      }
    );
  }
}