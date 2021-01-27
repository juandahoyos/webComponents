import { TestBed } from '@angular/core/testing';

import { FronteraService } from './frontera.service';

describe('FronteraService', () => {
  let service: FronteraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FronteraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
