import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  firstName: string;
  lastName: string;
  printing = false;

  studentCollection: Array<object> = [];

  constructor(private dataStore: SharedService) { }

  ngOnInit() {
    this.printing=true;
    this.studentCollection = this.dataStore.getStudents();
  }

}
