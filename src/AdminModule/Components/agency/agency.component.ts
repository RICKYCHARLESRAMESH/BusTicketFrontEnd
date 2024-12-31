import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from '../../../models/agency';
import { AdminService } from '../../Services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agency',
  imports: [CommonModule, FormsModule],
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  agency: Agency[] = []; // Array of Agency objects
  errorMessage: string | null = null;
  isTrue: boolean = false; // Toggle for creating a new agency
  showEditAgencyForm: boolean = false; // Controls visibility of the edit form
  newAgency: any = {}; // New agency data for the form
  editAgency: any = {}; // Agency data for editing

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getAllAgency();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    this.router.navigate(['']);  // Navigate to the home path
  }

  getAllAgency(): void {
    this.adminService.getAllAgency().subscribe(
      (data: Agency[]) => {
        this.agency = data;
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error fetching agencies', error);
        this.errorMessage = 'Failed to retrieve agencies. Please try again later.';
      }
    );
  }

  isCreate(): void {
    this.isTrue = true;
  }

  saveNewAgency(): void {
    this.adminService.saveNewAgency(this.newAgency).subscribe({
      next: (response) => {
        alert(response);
        this.getAllAgency(); // Refresh agency list after adding
        this.isTrue = false; // Close the form
      }
    });
  }

  // Edit agency
  editAgencyDetails(agency: any): void {
    this.editAgency = { ...agency }; // Create a copy of the agency to edit
    this.showEditAgencyForm = true; // Show the edit form
  }

  // Update agency
  updateAgency(agencyId: number,agency: Agency): void {
    this.adminService.UpdateAgency(agency,agencyId).subscribe({
      next: (response) => {
        alert('Agency updated successfully!');
        this.getAllAgency(); // Refresh the agency list
        this.showEditAgencyForm = false; // Hide the edit form
      },
      error: (err) => {
        alert('Error updating agency!');
        console.error(err);
      }
    });
  }
}
