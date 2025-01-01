import { Routes } from '@angular/router';
import { UserLoginComponent } from '../Login/user-login/user-login.component';
import { DriverLoginComponent } from '../Login/driver-login/driver-login.component';
import { AdminLoginComponent } from '../Login/admin-login/admin-login.component';
import { IndexComponent } from '../index/index.component';
import { CustomerDashboardComponent } from '../UserModule/Components/customer-dashboard/customer-dashboard.component';
// import { TripComponent } from '../UserModule/Components/trip/trip.component';
import { Component } from '@angular/core';
import { AdminDashboardComponent } from '../AdminModule/Components/admin-dashboard/admin-dashboard.component';
import { DriverDashBoardComponent } from '../DriverModule/Components/driver-dash-board/driver-dash-board.component';
import { CustomerComponent } from '../DriverModule/Components/customer/customer.component';
import { RouteComponent } from '../DriverModule/Components/route/route.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { UserRegisterComponent } from '../Login/user-register/user-register.component';
import { PaymentsComponent } from '../AdminModule/Components/payments/payments.component';
import { ReviewsComponent } from '../AdminModule/Components/reviews/reviews.component';
import { AgencyComponent } from '../AdminModule/Components/agency/agency.component';
import { BusComponent } from '../AdminModule/Components/bus/bus.component';
import { DriversComponent } from '../AdminModule/Components/drivers/drivers.component';
import { AdminCustomerComponent } from '../AdminModule/Components/admin-customer/admin-customer.component';
import { AdmintripsComponent } from '../AdminModule/Components/admintrips/admintrips.component';
import { AdminroutesComponent } from '../AdminModule/Components/adminroutes/adminroutes.component';
import { ListOfBusesComponent } from '../UserModule/Components/list-of-buses/list-of-buses.component';
export const routes: Routes = [

   { path: '', component:IndexComponent},
   
   { path: 'user-login', component:UserLoginComponent},
   { path: 'app-driver-login',component:DriverLoginComponent},
   { path: 'admin-login', component:AdminLoginComponent},
   { path: 'user-register',component:UserRegisterComponent},

   { path: 'customer-dashboard', component:CustomerDashboardComponent},
   { path: 'admin-dashboard',  component: AdminDashboardComponent},
   { path: 'driver-dash-board', component:DriverDashBoardComponent},
   { path: 'customer',  component:CustomerComponent},
   { path: 'route', component:RouteComponent},
   { path: 'about-page', component:AboutPageComponent},

   { path: 'payments', component:PaymentsComponent},
   { path: 'reviews',component:ReviewsComponent},
   { path: 'admin-customer',component:AdminCustomerComponent},
   { path: 'agency',component:AgencyComponent},
   { path: 'bus',component:BusComponent},
   { path: 'drivers',component:DriversComponent},
   { path: 'adminroutes',component:AdminroutesComponent},
   { path: 'admintrips',component:AdmintripsComponent},

   

   {path: 'list-of-buses',component:ListOfBusesComponent}
];
