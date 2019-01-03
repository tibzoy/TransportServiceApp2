import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Request } from '../request';
import { RequestService } from '../../../services/request/request.service';
import { RequestStatus } from '../request-enum';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;
  statusEnum: any;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private location: Location
  ) { }

  ngOnInit() {
    this.statusEnum = RequestStatus;
    this.getRequest();
  }

  getRequest(): void {
    const _id = this.route.snapshot.paramMap.get('id');
    this.requestService.getRequest(_id).subscribe(request => this.request = request);
  }

  accept(request: Request): void {
    this.requestService.acceptRequest(request).subscribe(_request => this.request = _request);
  }

  complete(request: Request): void {
    this.requestService.completeRequest(request).subscribe(_request => this.request = _request);
  }

  back(): void {
    this.location.back();
  }

  canComplete(): boolean {
    return this.request.status === RequestStatus.IN_PROGRESS && this.isDriverUser();
  }

  canAccept(): boolean {
    return this.request.status === RequestStatus.SUBMITTED && this.isDriverUser();
  }

  isDriverUser(): boolean {
    // TODO: verify if user is driver
    return true;
  }

}
