import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { VoteRequestModel } from '@app/models/api/requests/vote.request';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteApiService extends BaseApiService {

  constructor(private http: HttpClient) {
    super("votes");
  }

  vote(imageId: string, voteNumber: VoteRequestModel) {
    return this.http.post(this.getApiPath(), {
      image_id: imageId,
      value: voteNumber
    });
  }
}




@Injectable({
  providedIn: 'root'
})
export class MockVoteApiService extends VoteApiService {
  override vote(imageId: string, voteNumber: VoteRequestModel) {
    return timer(500)
  }
}

