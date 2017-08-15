import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AccumulatorComponent } from './accumulator/accumulator.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AccumulatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
