import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from './i-employee';

@Pipe({
  name: 'filtergender'
})
export class FiltergenderPipe implements PipeTransform {

  
  transform(list: any[], value: string) {

   
    return value ? list.filter(item => item.gender === value) : list;



}
}
