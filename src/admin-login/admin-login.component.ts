import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { user } from '../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent{

  constructor(private authenticationService: AuthenticationService){}
  user: user = {
    username: '',
    password: '',
    role: ''
  }
  token:any;
  AdminLogin(){
    this.user.role="ROLE_ADMIN"
    this.authenticationService.AdminLoginComponent(this.user).subscribe((e)=>{
    this.token=e.token;
    alert(JSON.stringify(e));
    localStorage.setItem('token',this.token);
    localStorage.setItem('role',this.user.role)
    },
    (error) => {
      console.error('Error saving user:', error);
      alert(JSON.stringify(error));
    });
    
  }
 

}
