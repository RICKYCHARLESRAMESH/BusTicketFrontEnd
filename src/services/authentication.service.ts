import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginComponent } from '../Login/user-login/user-login.component';
import { UserRegisterComponent } from '../Login/user-register/user-register.component';
import { AdminLoginComponent } from '../Login/admin-login/admin-login.component';
import { DriverLoginComponent } from '../Login/driver-login/driver-login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) { }
  RESTURL: String = "http://localhost:8300/api/";
 
 
  UserLoginComponent(user:any):Observable<any>{
    return this.httpClient.post(this.RESTURL+"auth",user,{
      responseType:'json'
    })
  }
 
  UserRegisterComponent(user:any):Observable<any>{
    return this.httpClient.post(this.RESTURL+"user/register",user,{
      responseType:'json'
    })
  }
 
  AdminLoginComponent(user:any):Observable<any>{
    return this.httpClient.post(this.RESTURL+"auth",user,{
      responseType:'json'
    })
  }
 
  DriverLoginComponent(user:any):Observable<any>{
    return this.httpClient.post(this.RESTURL+"auth",user,{
      responseType:'json'
    })
  }

  
 
 
}