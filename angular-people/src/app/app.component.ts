//import { PeopleService } from './service/people.service';
import { Component, ViewChild, OnInit } from '@angular/core';

//import { ListTableComponent} from './list-table/list-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent /*implements OnInit*/ {
  title = 'People list';

  constructor(/*public peopleService: PeopleService*/) {
  }

/*   ngOnInit() {
    this.peopleService.getPeopleFromServer();
  } */

/*   @ViewChild(ListTableComponent)
  private listTableComponent: ListTableComponent; */

/*   public personAdded(name: string) {
    console.log(name);
    this.listTableComponent.addPerson(name);
  }

  public allGood(status: boolean) {
    console.log(status);
    this.listTableComponent.setAllGood(status);
  } */

}
