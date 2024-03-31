import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreedCardComponent } from '@app/pages/breed/components/breed-card/breed-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FlexLayoutModule,
    BreedCardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
