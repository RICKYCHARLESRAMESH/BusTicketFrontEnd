import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../models/trips';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteModel } from '../../../models/route';
import { AdminService } from '../../../AdminModule/Services/admin.service';

@Component({
  selector: 'app-list-of-buses',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-of-buses.component.html',
  styleUrls: ['./list-of-buses.component.css']
})
export class ListOfBusesComponent implements OnInit {
  fromCity: string = '';
  toCity: string = '';
  tripDate: string = '';
  trips: Trip[] = [];
  route: RouteModel[] = [];
  errorMessage: string = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllTrips();
  }

  // Method to load all trips on initialization
  getAllTrips(): void {
    this.adminService.getAllTrips().subscribe(
      (data: Trip[]) => {
        this.trips = data;
        //this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching agencies', error);
        this.errorMessage = 'Failed to retrieve agencies. Please try again later.';
      }
    );
  }

  // Method to search trips based on fromCity, toCity, and tripDate
  searchTrips(): void {
    if (!this.fromCity || !this.toCity || !this.tripDate) {
      this.errorMessage = 'All fields are required!';
      return;
    }
    console.log(this.fromCity);
    this.adminService.getTrips(this.fromCity, this.toCity, this.tripDate).subscribe({

      next: (data: Trip[]) => {
        this.trips = data;
        this.errorMessage = ''; // Clear any previous error
      },
      // error: (err) => {
      //   this.errorMessage = 'An error occurred while fetching trips. Please try again.';
      //   console.error(err);
      // }
    });
  }
}
