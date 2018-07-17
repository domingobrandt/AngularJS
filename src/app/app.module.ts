import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule, /*MatDialogModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
MatSlideToggleModule,MatProgressSpinnerModule*/} from '@angular/material'; 
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
