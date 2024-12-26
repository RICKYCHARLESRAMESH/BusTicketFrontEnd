import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { user } from '../user';

@Component({
  selector: 'app-admin-login',
  imports: [],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  // constructor(private authenticationService: AuthenticationService){}
  //   user: user = {
  //     username: '',
  //     password: '',
  //     role: ''
  //   }
  //   DriverLogin(){
  //     this.authenticationService.AdminLoginComponent(this.user).subscribe((e)=>{
  //       console.log(e);
  //     })
  //   }
}
