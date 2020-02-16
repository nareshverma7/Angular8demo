import { Component} from '@angular/core';
import { IEmployee, Employee } from './i-employee';
import {EmployeeServiceService} from './employee-service.service'
import { observable, Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeServiceService]
})

export class AppComponent implements IEmployee {
  uname: String;
  pass: String;
  dateofjoining: any;
  gender: String;
  salary: number;
  id: number;
  name: string='';
  address: string;
  
  parent:string="hello cjc"
  
  flag:boolean=false
  count:number
  elsepart:String
  
  selectgender:any

  newemployee:any={}

 Employees:IEmployee[]=[]
     employee:Employee = new Employee();
  

  constructor(private _employeeService:EmployeeServiceService){
  this._employeeService.getEmployeeHttp().subscribe((s:IEmployee[])=>{this.Employees=s});
  this.Employees=this._employeeService.getEmployee();
  }
    
  //  empData():void {
  //     this.flag=!this.flag
  //      if(this.flag&&this.Employees.length!==0){
  //       this.Employees.forEach
  //      }
  //      else if(this.Employees.includes&&this.Employees.length==0){ 
  //           this.elsepart='no data found!'
  //      }
  // }
  responsefromchild(countchild){
    this.count =countchild;
  }
  
  private submit(employee:Employee):void{
    if(this.validate()){
      this._employeeService.addEmployee(this.employee).subscribe((add:number)=>{
        this.employee.id=add
      })
      this._employeeService.getEmployeeHttp().subscribe((s:IEmployee[])=>{this.Employees=s});
      this.reset();
      console.log(this.employee)
    }

  }

  private reset():void{
   
    this.employee
  }
  private validate(): boolean {  
    let status: boolean = true;  
    if (typeof (this.employee.id) === "undefined") {  
        alert('id is Blank');  
        status = false;  
        return;  
    }  
    else if (typeof (this.employee.name) === "undefined") {  
        alert('name is Blank');  
        status = false;  
        return;  
    }  
    else if (typeof (this.employee.address) === "undefined") {  
        alert('address is Blank');  
        status = false;  
        return;  
    }  
    else if (typeof (this.employee.gender) === "undefined") {  
        alert('gender is Blank');  
        status = false;  
        return;  
    }  
    else if (typeof (this.employee.salary) === "undefined") {  
      alert('salary is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this.employee.dateofjoining) === "undefined") {  
      alert('dateofjoining is Blank');  
      status = false;  
     return;  
    }  
    else if (typeof (this.employee.uname) === "undefined") {  
      alert('username is Blank');  
      status = false;  
     return;  
    }  
    else if (typeof (this.employee.pass) === "undefined") {  
      alert('password is Blank');  
      status = false;  
     return;  
    }  
    return status;  
}  


 
  // add(){
    
    
  //   this.newEmployee = {id:this.id,name:'',address:'',gender:'',salary:''}
  //   this.Employees.push(this.newEmployee)
  //   this.elsepart=""
  //   return true
  // }

  // selectedgender(){
  //   this.selectgender=this.Employees.filter(s=>{
  //    return s.gender.includes("Male")
  //   })
  // }
} 