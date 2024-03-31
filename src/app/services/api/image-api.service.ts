import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { ImageSearchRequestModel } from '@app/models/api/requests/image.request';
import { ImageResponseModel } from '@app/models/api/responses/image.reponse';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService extends BaseApiService {

  constructor(private http: HttpClient) {
    super('images');
  }

  searchImages(params: ImageSearchRequestModel) {
    return this.http.get<ImageResponseModel[]>(this.getApiPath(["search"]), { params });
  }

  getImage(id: string) {
    return this.http.get<ImageResponseModel>(this.getApiPath([id]));
  }

}
