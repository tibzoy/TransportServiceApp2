import { TestBed } from '@angular/core/testing';
import { RequestService } from './request.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});
