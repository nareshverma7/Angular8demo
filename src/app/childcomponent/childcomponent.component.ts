import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Employee } from '../i-employee';



@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  gender:string
  flag:boolean=false;

  @Input()
  Empdata:any[];

  @Output()
  childeventforParent:EventEmitter<number> = new EventEmitter<number>();
  
  
  constructor() { 
    
  }

  ngOnInit() {
    
    // if(this.genderAll=="All"){
    //   this.Empdata.filter(gender=>{this.Empdata=gender})
    // }
  }

  countEmp(){
    this.childeventforParent.emit(this.Empdata.length)
  }


  // filter(){
  //   if(this.Gender){
  //    return this.Empdata.filter(employee=>employee.gender===this.Gender)
  //   }
  //   else if(this.Gender){
  //     return this.Empdata.filter(employee=>employee.gender===this.Gender)
  //   }
  //   else if(this.Gender){
  //     return this.Empdata
  //   }
  // }

  radiochange(event:any){
    this.gender=event.target.value;
  }
}