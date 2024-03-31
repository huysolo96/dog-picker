import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

}
