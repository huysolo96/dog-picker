import { TestBed } from '@angular/core/testing';

import { BreedApiService } from './breed-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('BreedApiService', () => {
  let service: BreedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BreedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
