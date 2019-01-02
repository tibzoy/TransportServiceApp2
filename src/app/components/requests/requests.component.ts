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

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests(): void {
    this.requestService.getRequests()
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
    alert(`TODO: Fetch ${option.target.value} requests`);
  }

  onSelectRow(request: Request): void {

  }


}
