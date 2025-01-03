
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../../models/trips';
import { Customer } from '../../models/customer';
import { Payment } from '../../models/payments';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8300/api/'; // Replace with your actual backend URL
  // httpClient: any;

  constructor(private http: HttpClient) {}

  // Fetch trips based on from city, to city, and trip date
  getTrips(from_city: string, to_city: string, trip_date: string): Observable<any> {
    return this.http.get(this.baseUrl + `trips/${from_city}/${to_city}/${trip_date}`, {
      responseType: 'json'
    });
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.baseUrl +`customers`,customer, {
      responseType: 'text'
    });
  }

  createPayment(payment: Payment): Observable<any> {
    return this.http.post(this.baseUrl +`payment/add`,payment, {
      responseType: 'text'
    });
  }
 

}