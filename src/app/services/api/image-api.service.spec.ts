import { TestBed } from '@angular/core/testing';

import { ImageApiService } from './image-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ImageApiService', () => {
  let service: ImageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ImageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
