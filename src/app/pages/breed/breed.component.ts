import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [
    RouterModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.scss'
})
export class BreedComponent {

}
