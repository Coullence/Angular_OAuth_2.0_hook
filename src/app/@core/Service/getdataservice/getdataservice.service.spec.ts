import { TestBed } from '@angular/core/testing';

import { GetdataserviceService } from './getdataservice.service';

describe('GetdataserviceService', () => {
  let service: GetdataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
