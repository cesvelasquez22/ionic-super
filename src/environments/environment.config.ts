import { InjectionToken } from '@angular/core';

export interface EnvConfig {
  MOVIEDB_API: string;
  MOVIEDB_IMG_URL: string;
  MOVIEDB_API_KEY: string;
}

export const ENV_CONFIG = new InjectionToken<EnvConfig>('app.environment');
