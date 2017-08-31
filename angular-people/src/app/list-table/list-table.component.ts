import { GoodBadPipe } from './../pipes/good-bad.pipe';
import { PersonPipe } from './../pipes/person.pipe';
import { PeopleService } from './../service/people.service';
import { Component, OnInit, Input } from '@angular/core';
import { Person }  from '../dataModel/person';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {

  //public people: Person [] = [];

  filterGood: boolean = true;

  constructor(public peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeopleFromServer();
  }

  get people () : Person [] {
    return this.peopleService.getPeople();
  }

/*   public addPerson(name: string) {
    console.log("en list component: " + name);
    var p = new Person();
    p.setName(name);
    this.people.push(p);
  } */

/*   public setAllGood(status: boolean) {
    for(let person of this.people) {
      person.good = status;
    }
  } */

  get peopleCount () : number {
    return this.peopleService.getGoodPeopleCount();
  }

  updatePersonStatus (id: number, status: boolean) {
    this.peopleService.updatePersonStatusAndRefreshPeople(id, status);
  }

  /* getGoodPeopleCount() {
    let count = 0;
    for(let person of this.people) {
      if(person.good) {
        count++;
      }
    }
    return count;
  } */

}
