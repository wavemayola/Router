import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {

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
