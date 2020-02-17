import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciClockComponent } from './fibonacci-clock.component';

describe('FibonacciClockComponent', () => {
  let component: FibonacciClockComponent;
  let fixture: ComponentFixture<FibonacciClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibonacciClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
