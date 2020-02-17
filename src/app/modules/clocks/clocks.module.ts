import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClocksComponent } from './components/clocks/clocks.component';
import { FillForPipe } from './pipes/fill-for.pipe/fill-for.pipe';
import { SimpleClockComponent } from './components/simple-clock/simple-clock.component';
import { TimeService } from './services/time.service';
import { ControlsComponent } from './components/controls/controls.component';
import { KnobComponent } from './components/knob/knob.component';
import { BinaryClockComponent } from './components/binary-clock/binary-clock.component';
import { TimeInBitsPipe } from './pipes/time-in-bits.pipe/time-in-bits.pipe';
import { FibonacciClockComponent } from './components/fibonacci-clock/fibonacci-clock.component';
import { FibonacciTimeStatePipe } from './pipes/fibonacci-time-state.pipe/fibonacci-time-state.pipe';
import { BerlinUhrComponent } from './components/berlin-uhr/berlin-uhr.component';
import { BerlinUhrTimePipe } from './pipes/berlin-uhr-time.pipe/berlin-uhr-time.pipe';

@NgModule({
  declarations: [ClocksComponent, FillForPipe, SimpleClockComponent, ControlsComponent, KnobComponent, BinaryClockComponent, TimeInBitsPipe, FibonacciClockComponent, FibonacciTimeStatePipe, BerlinUhrComponent, BerlinUhrTimePipe],
  imports: [
    CommonModule
  ],
  exports: [
    ClocksComponent
  ],
  providers: [
    TimeService
  ]
})
export class ClocksModule { }
