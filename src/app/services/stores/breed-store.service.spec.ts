import { TestBed } from '@angular/core/testing';

import { BreedStoreService } from './breed-store.service';
import { BreedApiService } from '../api/breed-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('BreedStoreService', () => {
  let service: BreedStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreedApiService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BreedStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
