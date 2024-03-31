import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { BreedRequestModel } from '@app/models/api/requests/breed.request';
import { BreadResponseModel } from '@app/models/api/responses/breed.response';
import { map, switchMap, mergeMap, mergeAll } from 'rxjs/operators';

import { ImageApiService } from './image-api.service';
import { merge, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedApiService extends BaseApiService {

  constructor(private http: HttpClient, private imageApi: ImageApiService) {
    super('breeds');
  }

  getBreeds(params: BreedRequestModel) {
    return this.http.get<BreadResponseModel[]>(this.getUrl(), {
      params
    });
  }

  getBreedsWithImages(params: BreedRequestModel) {
    return this.getBreeds(params).pipe(
      switchMap(breeds => zip(...breeds.map(breed => this.imageApi.getImage(breed.reference_image_id).pipe(
        map(image => ({ breed, image })
        ))))
      ));
  }
}
