import { TestBed } from '@angular/core/testing';

import { CurrCodeService } from './curr-code.service';

describe('CurrCodeService', () => {
  let service: CurrCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
