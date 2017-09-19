import { element } from 'protractor';
import { HttpClientModule } from '@angular/common/http';
import { Person } from './../dataModel/person';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) { }

  private people: Person [] = [];

  getPeople() {
    //this.getPeopleFromServer();
    return this.people;
  }

  getPeopleFromServer() {
    this.http.get<Person[]>('http://localhost:3001/people').subscribe(data => {
      //console.log(data);

     //TODO: mapear los datos del server

      this.people = data;
    });
  }

  public addPerson(name: string, lastName: string) {
    //var p = new Person();
    //p.setName(name);
    //this.people.push(p);

    const body = {name: name, lastName: lastName, good: false};

    this.http.post('http://localhost:3001/people', body, {
      headers: new HttpHeaders().set('Content-Type','application/json')
    }).subscribe(data => {
      this.getPeopleFromServer();
    });

  }

  public updatePersonStatus(id: number, status: boolean) {
    const body = {good: status};
    
    this.http.patch('http://localhost:3001/people/'+id, body, {
      headers: new HttpHeaders().set('Content-Type','application/json')
    });
  }

  public updatePersonStatusAndRefreshPeople(id: number, status: boolean) {
    this.updatePersonStatus(id, status).subscribe(data => {
      this.getPeopleFromServer();
    })
  }

  public setAllGoodAndRefresh(status) {

    var observables = this.people.map(person => this.updatePersonStatus(person.id, status));

    Observable.forkJoin(observables).subscribe(data => {
      this.getPeopleFromServer();
    })
  }

  public getGoodPeopleCount() {
    let count = 0;
    for(let person of this.people) {
      if(person.good) {
        count++;
      }
    }
    return count;
  }

}
