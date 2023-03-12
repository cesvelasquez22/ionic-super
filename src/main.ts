import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {
  PreloadAllModules,
  provideRouter,
  RouteReuseStrategy,
  withPreloading,
} from '@angular/router';
import { appRoutes } from './app/app-routing.module';
import { APP_CONFIG } from './app/app.config';
import { ENV_CONFIG } from './environments/environment.config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviesInterceptor } from './app/interceptors/http.interceptor';

if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot()),
    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Interceptors
    { provide: HTTP_INTERCEPTORS, useClass: MoviesInterceptor, multi: true },

    // Environments
    { provide: APP_CONFIG, useValue: { title: 'Application Config' } },
    {
      provide: ENV_CONFIG,
      useValue: {
        NODE_ENV: process.env['NODE_ENV'],
        MOVIEDB_API: process.env['MOVIEDB_API'],
        MOVIEDB_IMG_URL: process.env['MOVIEDB_IMG_URL'],
        MOVIEDB_API_KEY: process.env['MOVIEDB_API_KEY'],
      },
    },
  ],
});
