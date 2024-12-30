// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8300/api/'; // Endpoint to fetch customers

  constructor(private httpClient: HttpClient) { }


  getAllCustomers(): Observable<any> {
 
    return this.httpClient.get(this.baseUrl+"customers", {
      responseType: 'json'
    });
  }

  getAllPayments(): Observable<any> {
 
    return this.httpClient.get(this.baseUrl+"payment/", {
      responseType: 'json'
    });
  }

  getAllReviews(): Observable<any> {
 
    return this.httpClient.get(this.baseUrl+"reviews", {
      responseType: 'json'
    });
  }

  getAllAgency(): Observable<any> {
 
    return this.httpClient.get(this.baseUrl+"agencies", {
      responseType: 'json'
    });
  }

  getAllBuses(): Observable<any> {
 
    return this.httpClient.get(this.baseUrl+"buses", {
      responseType: 'json'
    });
  }

  
}
