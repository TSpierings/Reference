import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryClockComponent } from './binary-clock.component';

describe('BinaryClockComponent', () => {
  let component: BinaryClockComponent;
  let fixture: ComponentFixture<BinaryClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
