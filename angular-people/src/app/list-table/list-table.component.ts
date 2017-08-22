import { Component, OnInit, Input } from '@angular/core';
import { Person }  from '../dataModel/person';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {

  public people: Person [] = [];

  constructor() { }

  ngOnInit() {
  }

  public addPerson(name: string) {
    console.log("en list component: " + name);
    var p = new Person();
    p.setName(name);
    this.people.push(p);
  }

  public setAllGood(status: boolean) {
    for(let person of this.people) {
      person.good = status;
    }
  }

  getGoodPeopleCount() {
    let count = 0;
    for(let person of this.people) {
      if(person.good) {
        count++;
      }
    }
    return count;
  }

}
