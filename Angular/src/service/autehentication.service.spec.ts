import { TestBed } from '@angular/core/testing';

import { AutehenticationService } from './autehentication.service';

describe('AutehenticationService', () => {
  let service: AutehenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutehenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
