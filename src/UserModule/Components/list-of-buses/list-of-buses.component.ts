import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../models/trips';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteModel } from '../../../models/route';
import { Router } from '@angular/router';
declare var Razorpay:any;

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
  trip:any;
  fare: any;

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(): void {
    this.searchTrips();
  }

  selectedTrip: any = null;


navigateToBookingPage(trip: any) {
  this.selectedTrip = trip;
}
 

  // Method to search trips based on fromCity, toCity, and tripDate
  searchTrips(): void {
    if (!this.fromCity || !this.toCity || !this.tripDate) {
      this.errorMessage = 'All fields are required!';
      return;
    }
    console.log(this.fromCity);
    this.userService.getTrips(this.fromCity, this.toCity, this.tripDate).subscribe({

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




  payNow() {
    const RazorpayOptions = {
      key: 'rzp_test_zWhcqYLonnFntk',
      amount: this.fare * 100,
      currency: 'INR',
      name: 'Bus Ticket',
      description: 'Sample Razorpay demo',
      image: 'https://i.imgur.com/FApqk3D.jpeg',
          prefill: {
            name: 'Bus Ticket',
            email: 'user@gmail.com',
            contact: '9898989898'
          },
          theme: {
            color: '#6466e3'
          },
          handler: (response: any) => {
           
            console.log('Payment successful. Payment ID:', response.razorpay_payment_id);
     
            // Navigate to home after successful payment
            this.router.navigate(['/user-review']);
          },
          modal: {
            ondismiss: () => {
              console.log('Payment modal dismissed');
            }
          }
        };
     
        try {
          const rzp = new Razorpay(RazorpayOptions);
          rzp.open();
     
         
         
        } catch (error) {
          console.error('Error initializing Razorpay:', error);
        }
      }

}
