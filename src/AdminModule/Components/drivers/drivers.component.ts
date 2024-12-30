import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers',
  imports: [],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent {

  constructor(private router: Router) {} 

  logout() {
    // Perform any necessary cleanup or logout actions
    console.log('Logged out successfully!');
    
    // Redirect to the index (home) component
    // alert('Logged out successfully!');
    this.router.navigate(['']);  // Navigate to the home path
  }

}
