import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/router';
import { RouteModel } from '../../../models/route';
import { DriverService } from '../../Services/driver.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route',
  imports: [CommonModule ],
  templateUrl: './route.component.html',
  styleUrl: './route.component.css'
})

  export class RouteComponent implements OnInit {
    routes: RouteModel [] = []; // Array of Customer objects
    errorMessage: string | null = null;
  
    constructor(private driverService: DriverService) {}
  
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
  }
  
