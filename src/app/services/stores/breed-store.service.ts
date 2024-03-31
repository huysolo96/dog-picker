import { Injectable, inject, } from '@angular/core';
import { BreadResponseModel } from '@app/models/api/responses/breed.response';
import { BehaviorSubject, map, tap } from 'rxjs';
import { BreedApiService } from '@services/api/breed-api.service';

@Injectable({
  providedIn: 'root'
})
export class BreedStoreService {
  private breed$ = new BehaviorSubject<BreadResponseModel | null>(null);
  private breedApi = inject(BreedApiService);
  fetchBreed(params: number) {
    return this.breedApi.getBreeds({
      page: params,
      limit: 1
    }).pipe(
      map(value => value[0]),
      tap(value => {
        this.breed$.next(value);
      })
    )
  }

  get breed() {
    return this.breed$.asObservable();
  }

}
