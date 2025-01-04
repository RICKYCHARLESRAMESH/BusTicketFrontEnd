import { Component, OnInit } from '@angular/core';
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
export class AdminroutesComponent implements OnInit {
  route: RouteModel[] = []; // Array of Route objects
  errorMessage: string | null = null;
  isTrue: boolean = false;
  showEditRouteForm: boolean = false;
  newRoute: any = {};
  editRoute: any = {};

  routeId: any = ''; // Route ID for searching by ID
  fromCity: string = ''; // From City for searching by From City
  toCity: string = ''; // To City for searching by To City
  searchedRoutes: RouteModel[] = []; // Store search result

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getAllRoutes();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['']);
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
      next: () => {
        alert('Route added successfully!');
        this.getAllRoutes(); 
        this.isTrue = false;
      },
      error: (err) => {
        alert('Error adding route!');
        console.error(err);
      }
    });
  }

  editRouteDetails(route: RouteModel): void {
    this.editRoute = { ...route };
    this.showEditRouteForm = true;
  }

  updateRoutes(route: RouteModel): void {
    this.adminService.updateRoutes(route).subscribe({
      next: () => {
        alert('Route updated successfully!');
        this.getAllRoutes(); 
        this.showEditRouteForm = false;
      },
      error: (err) => {
        alert('Error updating route!');
        console.error(err);
      }
    });
  }

  // Search routes by Route ID, From City, or To City
  searchRoutes(): void {
    if (this.routeId) {
      this.adminService.getRouteById(this.routeId).subscribe({
        next: (response) => {
          this.route = [response];
        },
        error: (err) => {
          console.error('Error fetching route by ID:', err);
          alert('Error fetching route details.');
        }
      });
    } else if (this.fromCity) {
      this.adminService.getRoutesByFromCity(this.fromCity).subscribe({
        next: (response) => {
          this.route = response;
        },
        error: (err) => {
          console.error('Error fetching routes by From City:', err);
          alert('Error fetching routes.');
        }
      });
    } else if (this.toCity) {
      this.adminService.getRoutesByToCity(this.toCity).subscribe({
        next: (response) => {
          this.route = response;
        },
        error: (err) => {
          console.error('Error fetching routes by To City:', err);
          alert('Error fetching routes.');
        }
      });
    } else {
      alert('Please enter a valid search criteria.');
    }
  }
}