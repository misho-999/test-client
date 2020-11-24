import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import ITestData from '../models/ITestData';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testData: Array<ITestData>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTestPage().subscribe(data => {
      this.testData = data;
      console.log(data);
    });
  }
}
