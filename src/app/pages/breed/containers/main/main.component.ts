import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { BreedCardComponent } from '@app/pages/breed/components/breed-card/breed-card.component';
import { ImageApiService } from '@app/services/api/image-api.service';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { ImageSearchRequestModel } from '@app/models/api/requests/image.request';
import { get } from 'lodash';
import { BreedApiService } from '@app/services/api/breed-api.service';
import { BreedRequestModel } from '@app/models/api/requests/breed.request';

const getParamPage = (route: Params) => get(route, "page", 0);
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FlexLayoutModule,
    BreedCardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(protected breedApi: BreedApiService, private route: ActivatedRoute, private router: Router) { }
  items$ = this.route.queryParams.pipe(
    debounceTime(500),
    map(params => <BreedRequestModel>({
      limit: 1,
      page: getParamPage(params),
      ...params,
    })),
    switchMap(params => this.breedApi.getBreedsWithImages(params),
    ));

  items = toSignal(this.items$, {
    initialValue: [],
  });

  handleVote() {
    this.router.navigate([], {
      relativeTo: this.route, queryParams: {
        page: getParamPage(this.route.snapshot.queryParams) + 1
      }
    });
  }

}
