import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  @Input() inputStudent:any;
  @Output() newStudent=new EventEmitter();
  constructor(private studentservice:StudentService){}
  sendstudenttoparent(stud:any){
    this.newStudent.emit(stud);
    console.log("send to parent");
  }
  updatestudent(stud1:any){
    this.studentservice.updateRank(stud1);
  }
}
