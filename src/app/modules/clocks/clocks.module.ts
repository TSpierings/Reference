import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClocksComponent } from './components/clocks/clocks.component';
import { FillForPipe } from './pipes/fill-for.pipe/fill-for.pipe';
import { SimpleClockComponent } from './components/simple-clock/simple-clock.component';
import { TimeService } from './services/time.service';

@NgModule({
  declarations: [ClocksComponent, FillForPipe, SimpleClockComponent],
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