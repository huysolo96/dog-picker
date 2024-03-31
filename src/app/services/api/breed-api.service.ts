import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class BreedApiService extends BaseApiService {

  constructor(private http: HttpClient) {
    super('breeds');
  }

  getBreeds() {
    return this.http.get(this.getUrl());
  }
}
