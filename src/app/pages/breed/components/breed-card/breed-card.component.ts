import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadResponseModel } from '@app/models/api/responses/breed.response';
import { VoteApiService } from '@app/services/api/vote-api.service';
import { VoteRequestModel } from '@app/models/api/requests/vote.request';
import { Observable, firstValueFrom, switchMap, tap } from 'rxjs';
import { outputToObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-breed-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breed-card.component.html',
  styleUrl: './breed-card.component.scss'
})
export class BreedCardComponent {
  value = input<BreadResponseModel>();
  voted = output();


  voteValue = VoteRequestModel;
  constructor(protected voteApi: VoteApiService) { }

  async vote(imageId: string, voteNumber: VoteRequestModel) {

    await firstValueFrom(this.voteApi.vote(imageId, voteNumber));
    this.voted.emit();
  }
}
