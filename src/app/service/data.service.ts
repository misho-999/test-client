import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import ITestData from '../models/ITestData';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient,
    private urlService: UrlService) { }

  getTestPage() {
    // return this.httpClient.get<Array<ITestData>>('http://localhost:8080/test');
    return this.httpClient.get<ITestData[]>(this.urlService.fullUrl('api/test'));
  }

  // private createHttpOptions(): unknown {
  //   const headers: {[key: string]: string} = {
  //     'Content-Type':  'application/json'
  //   };

  //   return {
  //     headers: new HttpHeaders(headers),
  //     withCredentials: true
  //   };
  // }
}
