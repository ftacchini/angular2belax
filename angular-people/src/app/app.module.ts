import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeopleService } from './service/people.service';

import { AppComponent } from './app.component';
import { HeaderToolsComponent } from './header-tools/header-tools.component';
import { ListTableComponent } from './list-table/list-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonPipe } from './pipes/person.pipe';
import { GoodBadPipe } from './pipes/good-bad.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

import { appRoutes } from './routes/routes';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolsComponent,
    ListTableComponent,
    PersonPipe,
    GoodBadPipe,
    HighlightDirective,
    PeopleDetailComponent,
    PeopleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
