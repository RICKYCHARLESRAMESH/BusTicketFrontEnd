import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { user } from '../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-driver-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './driver-login.component.html',
  styleUrl: './driver-login.component.css'
})
export class DriverLoginComponent {

  constructor(private authenticationService: AuthenticationService){}
  user: user = {
    username: '',
    password: '',
    role: ''
  }
  token:any;
  DriverLogin(){
    this.user.role="ROLE_DRIVER"
    this.authenticationService.DriverLoginComponent(this.user).subscribe((e)=>{
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
