import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from '../../components/departments/department';
import { DEPARTMENTS } from 'src/app/components/static/department-list';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  getDepartments(): Observable<Department[]>{
    return of(DEPARTMENTS);
  }
}
