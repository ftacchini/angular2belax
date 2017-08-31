import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeopleService } from './service/people.service';

import { AppComponent } from './app.component';
import { HeaderToolsComponent } from './header-tools/header-tools.component';
import { ListTableComponent } from './list-table/list-table.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonPipe } from './pipes/person.pipe';
import { GoodBadPipe } from './pipes/good-bad.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolsComponent,
    ListTableComponent,
    PersonPipe,
    GoodBadPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
