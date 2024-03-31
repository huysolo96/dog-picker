import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { BreedApiService } from '@app/services/api/breed-api.service';
import { BreedStoreService } from '@app/services/stores/breed-store.service';
import routes from '../../breed.routes';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent, HttpClientModule],
      providers: [BreedStoreService, BreedApiService, provideRouter(routes)]

    })
      .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
