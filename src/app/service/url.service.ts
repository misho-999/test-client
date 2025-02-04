import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private readonly serverLocation = environment.serverLocation;

  constructor() { }

  fullUrl(endpoint: string): string {
    return `${this.serverLocation}/${endpoint}`;
  }
}
