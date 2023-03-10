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

if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot()),
    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Environments
    { provide: APP_CONFIG, useValue: { title: 'Application Config' } },
    {
      provide: ENV_CONFIG,
      useValue: {
        NODE_ENV: process.env['NODE_ENV'],
        MOVIEDB_API: process.env['MOVIEDB_API'],
        MOVIEDB_API_KEY: process.env['MOVIEDB_API_KEY'],
      },
    },
  ],
});
