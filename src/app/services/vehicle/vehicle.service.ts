import { Injectable } from '@angular/core';
import { Vehicle } from '../../components/vehicle/vehicle';
import { VEHICLES } from '../../components/static/vehicle-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicles(pass: number): Observable<Vehicle[]> {
    return of(VEHICLES);
  }

  getVehicle(_id: string): Vehicle {
    return (VEHICLES.find(vehicle => vehicle._id === _id));
  }
}
