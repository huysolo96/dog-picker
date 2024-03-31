import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { BreedRequestModel } from '@app/models/api/requests/breed.request';
import { BreadResponseModel } from '@app/models/api/responses/breed.response';

@Injectable({
  providedIn: 'root'
})
export class BreedApiService extends BaseApiService {
  private http = inject(HttpClient)
  constructor() {
    super('breeds');
  }


  getBreeds(params: BreedRequestModel) {
    return this.http.get<BreadResponseModel[]>(this.getUrl(), {
      params
    });
  }
}
