import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { switchMap } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreedStoreService } from '@app/services/stores/breed-store.service';
import { ImageApiService } from '@app/services/api/image-api.service';
import { of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { useLoading } from '@app/utils/loading';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  protected breedStore = inject(BreedStoreService);
  protected imageApi = inject(ImageApiService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loading = useLoading();
  image = toSignal(this.breedStore.breed.pipe(
    switchMap(breed => breed ? this.imageApi.getImage(breed.reference_image_id, {
      size: "med"
    }).pipe(
      this.loading.onLoading
    ) : of(null))
  ));
  breed = toSignal(this.breedStore.breed);

  @HostListener('click')
  handleClick() {
    this.router.navigate(["breed", "details"], {
      queryParams: this.route.snapshot.queryParams
    })
  }


}
