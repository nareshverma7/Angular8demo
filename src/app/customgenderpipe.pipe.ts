import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customgenderpipe'
})
export class CustomgenderpipePipe implements PipeTransform {

  transform(value: any, gender:String): any {
    if(gender==="Male"){
      return "Mr "+value;
    }
    else if(gender==="Female"){
      return "Mrs "+value;
    } 
    else{
      return value;
    }
  }

}
