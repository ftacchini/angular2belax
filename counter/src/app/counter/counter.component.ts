import { CounterService } from './../services/counter.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from "rxjs";

@Component({
  selector: 'ct-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public accumulatedInternal: number = 0;
  public running: boolean = false;

  private subscription: Subscription;

  @Input() public tick: number;
  @Output() public onCount: EventEmitter<number> = new EventEmitter<number>();
  @Output() public onRemove: EventEmitter<any> = new EventEmitter<any>();

  constructor(private counter: CounterService) {}

  ngOnInit() {
  }

  public start(): void {
    this.counter.greet();
    this.running = true;
    this.accumulatedInternal = 0;

    this.subscription = Observable.interval(1000).subscribe(() => { 
      this.accumulatedInternal += this.tick;
    });
    
  }

  public stop(): void {
    this.running = false;
    this.subscription.unsubscribe();
    this.onCount.emit(this.accumulatedInternal);  
  }

  public removeCounter(): void {
    this.onRemove.emit();
  }

}
