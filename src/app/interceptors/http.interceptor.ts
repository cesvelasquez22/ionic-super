import { inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV_CONFIG } from 'src/environments/environment.config';

@Injectable()
export class MoviesInterceptor implements HttpInterceptor {
  private readonly environment = inject(ENV_CONFIG);
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.set('Content-Type', 'application/json');
    const params = req.params.set('api_key', this.environment.MOVIEDB_API_KEY);
    const authReq = req.clone({ headers, params });
    return next.handle(authReq);
  }
}
