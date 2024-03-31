import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
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
  breedInfo = input()
}
