import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';

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

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot()),
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules)
    ),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
});
