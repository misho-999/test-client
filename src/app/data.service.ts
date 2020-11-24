import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import ITestData from './models/ITestData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getTestPage() {
    return this.httpClient.get<Array<ITestData>>('http://localhost:8080/test');
  }



}
