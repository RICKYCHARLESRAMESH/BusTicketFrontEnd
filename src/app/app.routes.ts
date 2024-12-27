import { Routes } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { DriverLoginComponent } from '../driver-login/driver-login.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { IndexComponent } from '../index/index.component';
export const routes: Routes = [
    {
        path: '',
        component:IndexComponent
     },
    {
        path: 'user-login',
        component:UserLoginComponent
     },
     {
        path: 'app-driver-login',
        component:DriverLoginComponent
     },
     {
        path: 'admin-login',
        component:AdminLoginComponent
     },
     {
      path: 'user-register',
      component:UserRegisterComponent
   },
     
];
