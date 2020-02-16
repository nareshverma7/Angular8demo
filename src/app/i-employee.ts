 export interface IEmployee {
  
    
    id:number;
    name:string;
    address:string;
    salary?:number;
    gender:String;
    dateofjoining:String;
    uname:String;
    pass:String;
    
}

export class Employee implements IEmployee{
    uname: String;
    pass: String;
    id: number;
    name: string;
    address: string;
    salary?: number;
    gender: String;
    dateofjoining: String;
   
    
    getName(){
        return this.name
    }
}