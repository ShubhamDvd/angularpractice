import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {ExponentialStrengthPipe, OrderBy, DefaultImage, EmplTitle, ReverseString} from './test/test';
import { AppChildComponent } from './app-child/app-child.component';
import { StockstatusComponent } from './stockstatus/stockstatus.component';



@NgModule({
  declarations: [
    ExponentialStrengthPipe,
    OrderBy,
    DefaultImage,
    EmplTitle,
    ReverseString,
    AppComponent,
    TestComponent,
    AppChildComponent,
    StockstatusComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
   AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
