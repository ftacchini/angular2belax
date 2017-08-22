import { CounterService } from './../services/counter.service';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'ct-accumulator',
  templateUrl: './accumulator.component.html',
  styleUrls: ['./accumulator.component.css']
})
export class AccumulatorComponent implements OnInit {

  @ViewChildren(CounterComponent)
  public counterComponents: QueryList<CounterComponent>;

  public tick: number = 1;
  public accumulated: number = 0;
  public counters: { tick: number }[] = [];

  constructor() { }

  ngOnInit() {
  }

  public startAll(): void {
    this.counterComponents.forEach((counter) => {
      if(!counter.running) {
        counter.start();
      } 
    })
  }

  public accumulate(count: number): void {
    this.accumulated += count;
  }

  public removeCounter(counterIndex: number): void{
    this.counters.splice(counterIndex, 1);
  }

  public addCounter(tick: number): void {
    this.counters.push({tick: tick});
  }

}
