import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../routing/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CalendarModule } from '../calendar/calendar.module';
import { ClocksModule } from '../clocks/clocks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    ClocksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
