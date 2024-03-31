import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadResponseModel } from '@app/models/api/responses/breed.response';
import { VoteRequestModel } from '@app/models/api/requests/vote.request';


@Component({
  selector: 'app-breed-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breed-card.component.html',
  styleUrl: './breed-card.component.scss'
})
export class BreedCardComponent {
  value = input<BreadResponseModel>();
  loading = input<boolean>();

  voted = output<VoteRequestModel>();


  voteValue = VoteRequestModel;

  async vote(voteNumber: VoteRequestModel = VoteRequestModel.DISLIKE) {
    this.voted.emit(voteNumber);
  }


}
