import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from '../../../models/agency';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agency',
  imports: [CommonModule],
  templateUrl: './agency.component.html',
  styleUrl: './agency.component.css'
})
export class AgencyComponent implements OnInit 
{
  agency: Agency[] = []; // Array of Customer objects
  errorMessage: string | null = null;

  constructor(private adminService: AdminService,private router: Router) {}

  ngOnInit(): void {
    this.getAllAgency();
  }


  logout() {
    // Perform any necessary cleanup or logout actions
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    
    // Redirect to the index (home) component
    this.router.navigate(['']);  // Navigate to the home path
  }
  
  getAllAgency(): void {
    this.adminService.getAllAgency().subscribe(
      (data: Agency[]) => {
        this.agency = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching customers', error);
        this.errorMessage = 'Failed to retrieve customers. Please try again later.';
      }
    );
    }}