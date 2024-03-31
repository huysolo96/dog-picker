import { TestBed } from '@angular/core/testing';

import { BreedApiService } from './breed-api.service';

describe('BreedApiService', () => {
  let service: BreedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
