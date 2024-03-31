import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { BreadResponseModel } from '@app/models/api/responses/breed.response';
import { debounceTime, firstValueFrom, switchMap } from 'rxjs';
import { VoteRequestDictionary, VoteRequestModel } from '@app/models/api/requests/vote.request';
import { toSignal } from '@angular/core/rxjs-interop';
import { get } from 'lodash';
import { BreedStoreService } from '@app/services/stores/breed-store.service';
import { BreedCardComponent } from './components/breed-card/breed-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar } from '@angular/material/snack-bar';
import { useLoading } from '@app/utils/loading';
import { VoteApiService } from '@app/services/api/vote-api.service';

const getParamPage = (route: Params) => parseInt(get(route, "page", 0));

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    BreedCardComponent,
    MatIconModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 700 } }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.scss',
})
export class BreedComponent {
  protected route = inject(ActivatedRoute);
  protected router = inject(Router);
  protected breedStore = inject(BreedStoreService);
  protected voteApi = inject(VoteApiService);
  private snackBar = inject(MatSnackBar)
  voteValue = VoteRequestModel;

  value = input<BreadResponseModel>();
  loading = useLoading();
  submitting = useLoading();

  item$ = this.route.queryParams.pipe(
    debounceTime(500),
    switchMap(params => this.breedStore.fetchBreed(getParamPage(params)).pipe(
      this.loading.onLoading
    )),
  );

  item = toSignal(this.item$);


  async handleVote(imageId: string, voteNumber: VoteRequestModel) {
    try {
      await firstValueFrom(this.voteApi.vote(imageId, voteNumber).pipe(
        this.submitting.onLoading
      ));

      this.snackBar.open(`You voted ${VoteRequestDictionary[voteNumber]} successfully`, `Close`);
      this.router.navigate([], {
        relativeTo: this.route, queryParams: {
          page: getParamPage(this.route.snapshot.queryParams) + 1
        }
      });
    } catch (error) {
      this.snackBar.open(`You voted ${VoteRequestDictionary[voteNumber]} failed`, `Close`);

    }
  }


}
