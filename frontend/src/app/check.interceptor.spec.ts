import { TestBed } from '@angular/core/testing';

import { CheckInterceptor } from './check.interceptor';

describe('CheckInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CheckInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CheckInterceptor = TestBed.inject(CheckInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
