import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { delayPageResolver } from './delay-page.resolver';

describe('delayPageResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => delayPageResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
