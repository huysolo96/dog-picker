import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadResponseModel } from '@app/models/api/responses/breed.response';
import { VoteRequestModel } from '@app/models/api/requests/vote.request';


@Component({
  selector: 'app-breed-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breed-card.component.html',
  styleUrl: './breed-card.component.scss'
})
export class BreedCardComponent {
  value = input<BreadResponseModel>();
  loading = input<boolean>();

  voted = output<VoteRequestModel>();


  voteValue = VoteRequestModel;

  async vote(voteNumber: VoteRequestModel = VoteRequestModel.DISLIKE) {
    this.voted.emit(voteNumber);
  }


  defaultTouch = { x: 0, y: 0, time: 0 };
  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  handleTouch(event: TouchEvent) {
    let touch = event.touches[0] || event.changedTouches[0];

    if (event.type === 'touchstart') {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === 'touchend') {
      let deltaX = touch.pageX - this.defaultTouch.x;
      let deltaY = touch.pageY - this.defaultTouch.y;
      let deltaTime = event.timeStamp - this.defaultTouch.time;

      if (deltaTime < 500) {
        if (Math.abs(deltaX) > 60) {
          // swipe right
          if (deltaX > 0) {
            this.vote(VoteRequestModel.LIKE);
          } else {
            this.vote();
          }
        }

        if (Math.abs(deltaY) > 60) {
          // delta y is at least 60 pixels
          if (deltaY <= 0) {
            this.vote(VoteRequestModel.SUPERLIKE);
          }
        }

      }
    }


  }

}
