import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Request } from '../request';
import { RequestService } from '../../../services/request/request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRequest();
  }

  getRequest(): void {
    const _id = this.route.snapshot.paramMap.get('id');
    this.requestService.getRequest(_id).subscribe(request => this.request = request);
  }

  accept(request: Request): void {
    alert(`TODO: Accept request id=${request._id}`);
  }

  back(): void {
    this.location.back();
  }

}
