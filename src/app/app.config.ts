import { ApplicationConfig, Injectable, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '@app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@services/interceptors/auth.interceptor';


import { MockVoteApiService, VoteApiService } from '@services/api/vote-api.service';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import 'hammerjs';


@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = {
    swipe: { direction: (window as any).Hammer.DIRECTION_ALL },
  };
}



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([
        authInterceptor
      ])
    ),
    importProvidersFrom(HammerModule),
    /**
     * Due to an authentication issue with the API, we need to mock the vote API service.
     * This service will always return true for this demo.
     */
    {
      provide: VoteApiService,
      useExisting: MockVoteApiService
    },
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },

  ],
};
