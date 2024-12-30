import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../../../models/bus';
import { Agency } from '../../../models/agency';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bus',
  imports: [CommonModule],
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.css'
})
export class BusComponent  implements OnInit 
{
  buses: Bus[] = []; // Array of Customer objects
  errorMessage: string | null = null;

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
        this.buses = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching customers', error);
        this.errorMessage = 'Failed to retrieve customers. Please try again later.';
      }
    );
    }}
