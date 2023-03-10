import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieDbService {
  constructor(private httpClient: HttpClient) {}
}
