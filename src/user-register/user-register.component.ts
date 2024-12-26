import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { user } from '../user';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-user-register',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  constructor(private authenticationService: AuthenticationService){}
  user: user = {
    username: '',
    password: '',
    role: ''
  }
  UserRegister(){
    this.authenticationService.UserRegisterComponent(this.user).subscribe((e)=>{
      console.log(e);
    })
  }

}
