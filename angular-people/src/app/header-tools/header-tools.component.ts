import { PeopleService } from './../service/people.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-tools',
  templateUrl: './header-tools.component.html',
  styleUrls: ['./header-tools.component.css']
})

export class HeaderToolsComponent implements OnInit {

/*   @Output() public onAdd: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onAllGood: EventEmitter<boolean> = new EventEmitter<boolean>(); */

  public newName = "";
  public newLastName = "";

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

  public addPerson(newName: string, newLastName: string) {
    if(newName.length && newLastName.length) {
      this.newName = "";
      this.newLastName = "";
      //this.onAdd.emit(newName);
      this.peopleService.addPerson(newName, newLastName);
    }
  }

  public allGood(status) {
    //this.onAllGood.emit(status);
    this.peopleService.setAllGood(status);
  }

}
