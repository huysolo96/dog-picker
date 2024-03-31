import { HttpInterceptorFn } from '@angular/common/http';
import environment from '@env/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: {
      'x-api-key': environment.apiKey
    }
  });
  return next(req);
};
