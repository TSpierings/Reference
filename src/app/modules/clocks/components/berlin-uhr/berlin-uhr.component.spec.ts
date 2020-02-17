import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlinUhrComponent } from './berlin-uhr.component';

describe('BerlinUhrComponent', () => {
  let component: BerlinUhrComponent;
  let fixture: ComponentFixture<BerlinUhrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerlinUhrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerlinUhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
