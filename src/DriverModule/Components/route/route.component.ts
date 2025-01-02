import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/router';
import { RouteModel } from '../../../models/route';
import { DriverService } from '../../Services/driver.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-route',
  imports: [CommonModule,FormsModule ],
  templateUrl: './route.component.html',
  styleUrl: './route.component.css'
})

  export class RouteComponent implements OnInit {
    routes: RouteModel [] = []; // Array of Customer objects
    errorMessage: string | null = null;
  
    constructor(private driverService: DriverService,private router: Router) {}
  
    ngOnInit(): void {
      this.getAllRoutes();
    }
  
    getAllRoutes(): void {
      this.driverService.getAllRoutes().subscribe(
        (data: RouteModel[]) => {
          this.routes = data;
          this.errorMessage = null;
        },
        (error) => {
          console.error('Error fetching customers', error);
          this.errorMessage = 'Failed to retrieve customers. Please try again later.';
        }
      );
    }

    logout() {
      // Perform any necessary cleanup or logout actions
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      console.log('Logged out successfully!');
      
      // Redirect to the index (home) component
      this.router.navigate(['']);  // Navigate to the home path
    }
  }
  
