import { Person } from './../dataModel/person';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from './../service/people.service';

@Component({
  selector: 'ct-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  id: number;
  private sub: any;
  p: Person;

  constructor(private route: ActivatedRoute, public peopleService: PeopleService) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.p = this.peopleService.getPeople().find(person => person.id === this.id);
      
      // In a real app: dispatch action to load the details here.
   });
  }

}
