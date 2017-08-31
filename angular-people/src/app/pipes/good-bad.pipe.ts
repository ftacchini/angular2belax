import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './../dataModel/person';

@Pipe({
  name: 'goodBad',
  pure: false
})
export class GoodBadPipe implements PipeTransform {

  transform(value: Person[], flag: boolean): any {
    return value.filter(person => person.good == flag);
  }

}
