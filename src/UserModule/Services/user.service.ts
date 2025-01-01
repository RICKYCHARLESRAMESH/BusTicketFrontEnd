
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../../models/trips';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8300/api/'; // Replace with your actual backend URL
  httpClient: any;

  constructor(private http: HttpClient) {}

  // getAllTrips(): Observable<any> {
 
  //   return this.httpClient.get(this.baseUrl+"trips/get", {
  //     responseType: 'json'
  //   });
  // }

  // Fetch trips based on from city, to city, and trip date
  getTrips(from_city: string, to_city: string, trip_date: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + `trips/${from_city}/${to_city}/${trip_date}`, {
      responseType: 'json'
    });
  }

}