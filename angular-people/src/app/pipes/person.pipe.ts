import { Person } from './../dataModel/person';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personPipe'
})
export class PersonPipe implements PipeTransform {

  transform(value: Person, args?: any): any {
    //console.log(value);
    return `${value.lastName}, ${value.name}` ;
  }

}
