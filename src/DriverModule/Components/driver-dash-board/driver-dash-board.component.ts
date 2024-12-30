import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-dash-board',
  imports: [],
  templateUrl: './driver-dash-board.component.html',
  styleUrl: './driver-dash-board.component.css'
})
export class DriverDashBoardComponent {

  constructor(private router: Router) {}  // Inject Router into the constructor

  logout() {
    // Perform any necessary cleanup or logout actions
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('Logged out successfully!');
    
    // Redirect to the index (home) component
    this.router.navigate(['']);  // Navigate to the home path
  }


}
