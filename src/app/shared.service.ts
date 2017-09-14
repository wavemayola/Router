import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
shStudentCollection: Array<object> = [];
  studentObject: {num: number, 
    firstName: string, 
    lastName: string, 
    prog: string, 
    yr: number};

  constructor() { }

  addStudent(number: number, firstname: string, lastname: string, program: string, year: number) {
    this.studentObject = {
      num: number,
      firstName: firstname,
      lastName: lastname,
      prog: program,
      yr: year
    };
    this.shStudentCollection.push(this.studentObject);
  }

  getStudents(): Array<object> {
    return this.shStudentCollection;
  }tructor() { }

}
