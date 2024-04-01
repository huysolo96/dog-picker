import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedStoreService } from '@app/services/stores/breed-store.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  protected breedStore = inject(BreedStoreService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  breed = toSignal(this.breedStore.breed);

  @HostListener('click')
  handleClick() {
    this.router.navigate(["breed", "overview"], {
      queryParams: this.route.snapshot.queryParams
    })
  }
}
