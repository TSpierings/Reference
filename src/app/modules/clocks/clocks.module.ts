import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClocksComponent } from './components/clocks/clocks.component';
import { FillForPipe } from './pipes/fill-for.pipe/fill-for.pipe';



@NgModule({
  declarations: [ClocksComponent, FillForPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ClocksComponent
  ]
})
export class ClocksModule { }
