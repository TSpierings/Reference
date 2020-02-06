import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksComponent } from './clocks.component';
import { FillForPipe } from '../../pipes/fill-for.pipe/fill-for.pipe';

describe('ClocksComponent', () => {
  let component: ClocksComponent;
  let fixture: ComponentFixture<ClocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClocksComponent, FillForPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
