import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulatorComponent } from './accumulator.component';

describe('AccumulatorComponent', () => {
  let component: AccumulatorComponent;
  let fixture: ComponentFixture<AccumulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccumulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccumulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
