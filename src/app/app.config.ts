import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '@app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from '@services/interceptors/auth.interceptor';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    // Interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: authInterceptor,
      multi: true,
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
    }
  ],
};
