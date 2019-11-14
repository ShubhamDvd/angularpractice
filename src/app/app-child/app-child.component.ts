import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import the output & eventemiiter ....
@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
  //define the @Output() with variable...
@Output() valuechange = new EventEmitter();
counter = 0;
  constructor() { }
  valueChanged () {
    this.counter = this.counter + 1;
    //emit the value of counter..
    this.valuechange.emit(this.counter);
  }
  ngOnInit() {
  }

}
