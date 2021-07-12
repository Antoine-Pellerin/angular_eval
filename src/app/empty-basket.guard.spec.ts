import { TestBed, async, inject } from '@angular/core/testing';

import { EmptyBasketGuard } from './empty-basket.guard';

describe('EmptyBasketGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmptyBasketGuard]
    });
  });

  it('should ...', inject([EmptyBasketGuard], (guard: EmptyBasketGuard) => {
    expect(guard).toBeTruthy();
  }));
});
