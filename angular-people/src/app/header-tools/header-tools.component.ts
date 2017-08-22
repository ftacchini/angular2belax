import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-tools',
  templateUrl: './header-tools.component.html',
  styleUrls: ['./header-tools.component.css']
})

export class HeaderToolsComponent implements OnInit {

  @Output() public onAdd: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onAllGood: EventEmitter<boolean> = new EventEmitter<boolean>();

  public newName = "";

  constructor() { }

  ngOnInit() {
  }

  public addPerson(newName) {
    if(newName.length) {
      this.newName = "";
      this.onAdd.emit(newName);
    }
  }

  public allGood(status) {
    this.onAllGood.emit(status);
  }

}
