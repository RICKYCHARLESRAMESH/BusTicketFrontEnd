import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router'; 
import { AdminService } from '../../Services/admin.service';
import { RouteModel } from '../../../models/route';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminroutes',
  imports: [CommonModule, FormsModule],
  templateUrl: './adminroutes.component.html',
  styleUrl: './adminroutes.component.css'
})
export class AdminroutesComponent  implements OnInit {
  route: RouteModel[] = []; // Array of Routes objects
  errorMessage: string | null = null;
  isTrue: boolean = false; // Toggle for creating a new route
  showEditRouteForm: boolean = false; // Controls visibility of the edit form
  newRoute: any = {}; // New route data for the form
  editRoute: any = {}; // Route data for editing

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getAllRoutes();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    this.router.navigate(['']); // Navigate to the home path
  }

  getAllRoutes(): void {
    this.adminService.getAllRoutes().subscribe(
      (data: RouteModel[]) => {
        this.route = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching routes', error);
        this.errorMessage = 'Failed to retrieve routes. Please try again later.';
      }
    );
  }

  isCreate(): void {
    this.isTrue = true;
  }

  saveNewRoutes(): void {
    this.adminService.saveNewRoutes(this.newRoute).subscribe({
      next: (response) => {
        alert('Route added successfully!');
        this.getAllRoutes(); // Refresh the routes list after adding
        this.isTrue = false; // Close the form
      },
      error: (err) => {
        alert('Error adding route!');
        console.error(err);
      }
    });
  }

  // Edit route
  editRouteDetails(route: RouteModel): void {
    this.editRoute = { ...route }; // Create a copy of the route to edit
    this.showEditRouteForm = true; // Show the edit form
  }

  // Update route
  updateRoutes(route: RouteModel): void {
    this.adminService.updateRoutes(route).subscribe({
      next: (response) => {
        alert('Route updated successfully!');
        this.getAllRoutes(); // Refresh the routes list
        this.showEditRouteForm = false; // Hide the edit form
      },
      error: (err) => {
        alert('Error updating route!');
        console.error(err);
      }
    });
  }
}
