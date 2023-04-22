import { Injectable } from '@angular/core';
import { Student } from './studentcomponent/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students=[{id:1,name:'srija',age:22,gender:'female',class:10,rank:3},{id:2,name:'divya',age:21,gender:'female',class:8,rank:1},{id:3,name:'bharath',age:20,gender:'male',class:7,rank:2},{id:4,name:'sai',age:21,gender:'male',class:9,rank:4},{id:5,name:'padhu',age:22,gender:'female',class:10,rank:2}]
  
  getstudents(){
    return this.students
  }
  updateRank(Student:any){
    let newInd=Student.rank-1;
    let oldInd=0;
    let old=0;
    for(let i=0;i<this.students.length;i++){
      if(Student.id==this.students[i].id){
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
      this.students[i].rank+=adder;
    }
    this.students[old]=Student;
    if(adder==-1){
      this.students[oldInd].rank+=adder;
    }
    this.sortAscending();
  }
  sortAscending(){
    this.students.sort((a, b) => {
      return a.rank - b.rank;
    });
    console.log(this.students)
  }
  sortDescending(){
    this.students.sort((a, b) => {
      return  b.rank - a.rank;
    });
  }

  
}

