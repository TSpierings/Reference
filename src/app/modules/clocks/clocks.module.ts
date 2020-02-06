import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClocksComponent } from './components/clocks/clocks.component';



@NgModule({
  declarations: [ClocksComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClocksComponent
  ]
})
export class ClocksModule { }
