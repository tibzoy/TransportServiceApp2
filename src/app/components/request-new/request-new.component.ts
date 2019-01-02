import { Component, OnInit } from '@angular/core';
import { Request } from '../requests/request';
import { RequestService } from '../../services/request/request.service';
import { Department } from '../departments/department';
import { DepartmentService } from '../../services/department/department.service';
import { Vehicle } from '../vehicle/vehicle';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-new',
  templateUrl: './request-new.component.html',
  styleUrls: ['./request-new.component.css']
})
export class RequestNewComponent implements OnInit {

  request: Request;

  departments: Department[];

  vehicles: Vehicle[];

  dateNow: string;

  constructor(
    private router: Router,
    private requestService: RequestService,
    private departmentService: DepartmentService,
    private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getDepartments();
    this.getVehicles(1);
    this.request = new Request();
    this.dateNow = new Date().toISOString();
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }

  getVehicles(maxPass: number): void {
    this.vehicleService.getVehicles(maxPass).subscribe(vehicles => this.vehicles = vehicles);
  }

  onSubmit(): void {
    this.beforeSubmit( () => {
      this.requestService.sendRequest(this.request as Request).subscribe(request => {
        this.router.navigate(['/requests', request._id]);
      });
    });
  }

  beforeSubmit(cb): void {
    this.request.vehicle = this.vehicleService.getVehicle(this.request.vehicle);
    cb();
  }

}
