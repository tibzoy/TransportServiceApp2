import { Component, OnInit } from '@angular/core';
import { Request } from './request';
import { RequestService } from '../../services/request/request.service';
import { RequestStatus } from './request-enum';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: Request[];
  requestStatus = RequestStatus;
  selectedRequest: Request;
  today: String;
  tomorrow: String;

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.initFilters();
    this.getRequests();
  }

  initFilters(): void {
    const _now = new Date();
    this.today = _now.toISOString().split('T')[0].toString();
    _now.setDate( _now.getDate() + 1 );
    this.tomorrow = _now.toISOString().split('T')[0].toString();
  }

  getRequests(date: String = this.today): void {
    this.requestService.getRequests(date)
      .subscribe(requests => this.requests = requests);
  }

  // User actions
  complete(request: Request): void {
    alert(`TODO: Complete request _id=${request._id}`);
  }

  cancel(request: Request): void {
    alert(`TODO: Cancel request _id=${request._id}`);
  }

  setDay(option: any): void {
    const day = option.target.value;
    this.requestService.getRequests(day).subscribe( requests => this.requests = requests );
  }

  onSelectRow(request: Request): void {

  }


}
