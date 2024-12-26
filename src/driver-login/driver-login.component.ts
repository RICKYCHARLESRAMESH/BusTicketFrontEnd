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
    // constructor(private authenticationService: AuthenticationService){}
    // user: user = {
    //   username: '',
    //   password: '',
    //   role: ''
    // }
    // DriverLogin(){
    //   this.authenticationService.DriverLoginComponent(this.user).subscribe((e)=>{
    //     console.log(e);
    //   })
    // }

}
