import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { user } from '../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-user-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  constructor(private authenticationService: AuthenticationService,private router:Router){}
  user: user = {
    username: '',
    password: '',
    role: ''
  }
  token:any;
  UserLogin(){
    this.user.role="ROLE_USER"
    this.authenticationService.UserLoginComponent(this.user).subscribe((e)=>{
    this.token=e.token;
    // alert(JSON.stringify(e));
    localStorage.setItem('token',this.token);
    localStorage.setItem('role',this.user.role)
    this.router.navigate(["/customer-dashboard"])
    },
    (error) => {
      console.error('Error saving user:', error);
      alert(JSON.stringify(error));
    });
    
  }

}
