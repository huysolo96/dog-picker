import { TestBed } from '@angular/core/testing';

import { VoteApiService } from './vote-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('VoteApiService', () => {
  let service: VoteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(VoteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
