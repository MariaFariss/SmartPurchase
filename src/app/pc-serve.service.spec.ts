import { TestBed } from '@angular/core/testing';

import { PcServeService } from './pc-serve.service';

describe('PcServeService', () => {
  let service: PcServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
