import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { Routes } from '../../models/route';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8300/api/'; // Endpoint to fetch customers

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<any> {
 
    return this.httpClient.get(this.baseUrl+"customers", {
      responseType: 'json'
    });
  }

  getAllRoutes(): Observable<any> {
 
    return this.httpClient.get(this.baseUrl+"routes", {
      responseType: 'json'
    });
  }
}
