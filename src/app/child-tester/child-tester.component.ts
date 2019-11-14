import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-tester',
  templateUrl: './child-tester.component.html',
  styleUrls: ['./child-tester.component.css']
})
export class ChildTesterComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'shubham dwivedi';
  }

  ngOnInit() {
  }

}
