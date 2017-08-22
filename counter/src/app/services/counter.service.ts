import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  timesIveBeenCalled: number = 0;

  constructor() { }

  greet(): void {
    this.timesIveBeenCalled++;
    alert(`you have called me ${this.timesIveBeenCalled} times`);
  }

}
