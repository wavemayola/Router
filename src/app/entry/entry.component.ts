import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-entry-component',
  templateUrl: './entry-component.component.html',
  styleUrls: ['./entry-component.component.css']
})
export class EntryComponentComponent implements OnInit {

  constructor(private dataStore: SharedService) { }

  ngOnInit() {
  }

  onSubmit(studentForm) {
    this.dataStore.addStudent(studentForm.value.number,
    studentForm.value.fname,
    studentForm.value.lname,
    studentForm.value.program,
    studentForm.value.year);
    
    studentForm.reset();
  }

}
