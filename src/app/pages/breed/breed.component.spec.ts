import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedComponent } from './breed.component';
import { HttpClientModule } from '@angular/common/http';
import { BreedStoreService } from '@app/services/stores/breed-store.service';
import { BreedApiService } from '@app/services/api/breed-api.service';
import { provideRouter } from '@angular/router';
import routes from './breed.routes';

describe('BreedComponent', () => {
  let component: BreedComponent;
  let fixture: ComponentFixture<BreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedComponent, HttpClientModule],
      providers: [BreedStoreService, BreedApiService, provideRouter(routes)]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
