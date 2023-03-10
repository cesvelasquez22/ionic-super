import { InjectionToken } from '@angular/core';

export interface EnvConfig {
  MOVIEDB_API: string;
  MOVIE_API_KEY: string;
}

export const ENV_CONFIG = new InjectionToken<EnvConfig>('app.environment');
