import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agency } from '../../models/agency';
import { Driver } from '../../models/driver';
import { RouteModel } from '../../models/route';
import { Bus } from '../../models/bus';
import { Trip } from '../../models/trips';

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

  getAllDrivers(): Observable<any> {
 
    return this.httpClient.get(this.baseUrl+"drivers", {
      responseType: 'json'
    });
  }

  getAllRoutes(): Observable<any> {
 
    return this.httpClient.get(this.baseUrl+"routes", {
      responseType: 'json'
    });
  }

// AGENCY
  saveNewAgency(agency:Agency): Observable<any> {
 
    return this.httpClient.post(this.baseUrl+"agencies/addAgency",agency, {
      responseType: 'text'
    });
  }
  UpdateAgency(agency:Agency,agencyId:number): Observable<any> {
 
    return this.httpClient.put(this.baseUrl+`agencies/updateAgency/${agencyId}`,agency, {
      responseType: 'text'
    });
  }

//DRIVER  
  saveNewDrivers(driver:Driver): Observable<any> {
 
    return this.httpClient.post(this.baseUrl+"drivers",driver, {
      responseType: 'text'
    });
  }
  UpdateDrivers(updatedDriver:Driver,driverId:number): Observable<any> {
 
    return this.httpClient.put(this.baseUrl+`drivers/${driverId}`,updatedDriver, {
      responseType: 'text'
    });
  }

  // ROUTES

  saveNewRoutes(route:RouteModel): Observable<any> {
 
    return this.httpClient.post(this.baseUrl+"routes/add",route, {
      responseType: 'text'
    });
  }
  updateRoutes(route:RouteModel): Observable<any> {
 
    return this.httpClient.put(this.baseUrl+`routes`,route, {
      responseType: 'text'
    });
  }


   // BUSES

   saveNewBuses(bus:Bus): Observable<any> {
 
    return this.httpClient.post(this.baseUrl+"buses",bus, {
      responseType: 'text'
    });
  }
  updateBus(busDetails: Bus,busId: Number, ): Observable<any> {
 
    return this.httpClient.put(this.baseUrl+`buses/${busId}`,busDetails, {
      responseType: 'text'
    });
  }


  // TRIPS

  getAllTrips(): Observable<any> {
 
    return this.httpClient.get(this.baseUrl+"trips/get", {
      responseType: 'json'
    });
  }

  saveNewTrip(trip:Trip): Observable<any> {
 
    return this.httpClient.post(this.baseUrl+"trips/add",trip, {
      responseType: 'text'
    });
  }
  updateTrip(trip:Trip): Observable<any> {
 
    return this.httpClient.put(this.baseUrl+`trips/update`,{
      responseType: 'json'
    });
  }






  getTrips(from_city: string, to_city: string, trip_date: string): Observable<any> {
    return this.httpClient.get(this.baseUrl+`trips/${from_city}/${to_city}/${trip_date}`,{
      responseType: 'json'
    });
}
}
