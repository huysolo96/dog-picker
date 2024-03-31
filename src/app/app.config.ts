import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '@app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@services/interceptors/auth.interceptor';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { MockVoteApiService, VoteApiService } from '@services/api/vote-api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([
        authInterceptor
      ])
    ),
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
    },
    /**
     * Due to an authentication issue with the API, we need to mock the vote API service.
     * This service will always return true for this demo.
     */
    {
      provide: VoteApiService,
      useExisting: MockVoteApiService
    }
  ],
};
