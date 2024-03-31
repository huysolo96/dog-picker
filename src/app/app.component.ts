import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlexLayoutModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codeleap-demo';
}
