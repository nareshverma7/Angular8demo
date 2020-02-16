import { Injectable } from '@angular/core';
import {IEmployee, Employee} from './i-employee'
import {HttpClient,HttpResponse,HttpHeaders}   from '@angular/common/http'
import {pipe,  Observable, Observer} from 'rxjs'

@Injectable()
export class EmployeeServiceService {
 

  private Emp_list:Array<any>=[]

  url:string ="http://localhost:9992"
  constructor(private _httpClient:HttpClient ) { 

  }
  getEmployeeHttp(){    
    return this._httpClient.get<IEmployee[]>(this.url+"/getemployee");
  }

  getEmployee(){

    return this.Emp_list
  }

  addEmployee(employee:Employee):Observable<number>{
   
   return this._httpClient.post<number>(this.url+"/addemployee", employee)
  }
}
