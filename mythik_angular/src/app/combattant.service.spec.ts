import { TestBed } from '@angular/core/testing';

import { CombattantService } from './selection-combat/combattant.service';

describe('CombattantService', () => {
  let service: CombattantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombattantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
