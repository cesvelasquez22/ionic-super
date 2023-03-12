import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV_CONFIG } from 'src/environments/environment.config';
import { DiscoverResponse } from '../types/movies.types';
import { map, shareReplay } from 'rxjs';

@Injectable()
export class MovieDbService {
  private readonly environment = inject(ENV_CONFIG);
  private readonly httpClient = inject(HttpClient);

  movies$ = this.httpClient
    .get<DiscoverResponse>(`${this.environment.MOVIEDB_API}/discover/movie`)
    .pipe(map(({ results }) => results), shareReplay(1));
}
