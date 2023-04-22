import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from './Student';

@Component({
  selector: 'app-studentcomponent',
  templateUrl: './studentcomponent.component.html',
  styleUrls: ['./studentcomponent.component.css']
})
export class StudentcomponentComponent {
  constructor(private studentservice:StudentService){
  }
  studentlist=this.studentservice.getstudents()
  //student1 : Student[]=[] 
  studentSelected:Student=new Student();
  checkview:boolean=false;
  ngOnInit():void{}

  viewstudent(stud:Student){
    this.studentSelected=stud;
    this.checkview=true;


  }
  updatestudent(stud: any){
    console.log(stud);

  }


  updateRank(Student:any){
    let newInd=Student.rank-1;
    let oldInd=0;
    let old=0;
    for(let i=0;i<this.studentlist.length;i++){
      if(Student.id==this.studentlist[i].id){
        oldInd=i;
      }
    }
    old=oldInd;
    let adder=0;
    if(newInd<oldInd){
      adder=1;
    }else{
      adder=-1;
      oldInd=newInd
      newInd=old
    }
    for(let i=newInd;i<oldInd;i++){
      this.studentlist[i].rank+=adder;
    }
    this.studentlist[old]=Student;
    if(adder==-1){
      this.studentlist[oldInd].rank+=adder;
    }
    this.sortAscending();
  }
  sortAscending(){
    this.studentlist.sort((a, b) => {
      return a.rank - b.rank;
    });
    console.log(this.studentlist)
  }
  sortDescending(){
    this.studentlist.sort((a, b) => {
      return  b.rank - a.rank;
    });
  }
  

}
