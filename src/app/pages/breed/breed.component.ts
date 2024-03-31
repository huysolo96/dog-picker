import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.scss',
})
export class BreedComponent {

}
