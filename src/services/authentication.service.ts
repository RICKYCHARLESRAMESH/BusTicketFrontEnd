import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { DriverLoginComponent } from '../driver-login/driver-login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) { }
  RESTURL: String = "http://localhost:8300/api";
 
 
  UserLoginComponent(user:any):Observable<any>{
    return this.httpClient.post(this.RESTURL+"userLogin",user,{
      responseType:'json'
    })
  }
 
  UserRegisterComponent(user:any):Observable<any>{
    return this.httpClient.post(this.RESTURL+"userRegister",user,{
      responseType:'json'
    })
  }
 
  AdminLoginComponent(user:any):Observable<any>{
    return this.httpClient.post(this.RESTURL+"adminRegister",user,{
      responseType:'json'
    })
  }
 
  DriverLoginComponent(user:any):Observable<any>{
    return this.httpClient.post(this.RESTURL+"driverLogin",user,{
      responseType:'json'
    })
  }
 
 
}
 
 