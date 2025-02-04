
import { Component, OnInit } from '@angular/core';
import ITestData from '../models/ITestData';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  standalone: false,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testData: ITestData[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTestPage().subscribe(data => {
      this.testData = data;
      console.log(data);
    });
  }
}
