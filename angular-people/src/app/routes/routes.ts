import { HomeComponent } from './../home/home.component';
import { PeopleComponent } from './../people/people.component';
import { PeopleDetailComponent } from './../people-detail/people-detail.component';
import { Routes } from '@angular/router';
//import { AppComponent } from '../app.component';

export const appRoutes : Routes = [
    { path: 'people', component: PeopleComponent },
    { path: 'people/:id', component: PeopleDetailComponent },
    { path: '', component: HomeComponent}
];