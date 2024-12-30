import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { user } from '../../models/user';
import { Router } from '@angular/router'; // Correct Angular Router import
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-user-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'], // Corrected `styleUrl` to `styleUrls`
})
export class UserRegisterComponent {
  user: user = {
    username: '',
    password: '',
    role: ''
  };

  message: string = '';
  showModal: boolean = false;

  // Inject the Angular Router
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router // Inject Router here
  ) {}

  UserRegister() {
    this.authenticationService.UserRegisterComponent(this.user).subscribe((e) => {
      console.log('User registered successfully:', e);
      this.message = 'User account created successfully!';
      this.showModal = true; // Show the modal
      setTimeout(() => {
        this.showModal = false;
        this.router.navigate(['/user-login']); // Redirect to login page after modal
      }, 1000); // Modal stays for 3 seconds before redirecting
    },
    (error) => {
      console.error('Error during registration:', error);
      this.message = 'Registration failed. Please try again.';
      this.showModal = true; // Show the modal
      setTimeout(() => {
        this.showModal = false;
      }, 3000); // Modal disappears after 3 seconds
    }
  );
  }
}
