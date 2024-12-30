import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { user } from '../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { DriverDashBoardComponent } from '../../DriverModule/Components/driver-dash-board/driver-dash-board.component';


@Component({
  selector: 'app-driver-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './driver-login.component.html',
  styleUrl: './driver-login.component.css'
})
export class DriverLoginComponent {


  constructor(private authenticationService: AuthenticationService,private router: Router){}
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

    if (this.token) {
      // Store token and username in local/session storage
      localStorage.setItem('token', this.token);
      sessionStorage.setItem('token', this.token);
      localStorage.setItem('role',this.user.role);
      console.log(this.user.role);
     
      this.router.navigate(["/driver-dash-board"]);
    }

    },
    (error) => {
      console.error('Error saving user:', error);
      alert(JSON.stringify(error));
    });
    
  }
 

}
