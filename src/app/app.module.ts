import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ErrorStateMatcher } from '@angular/material/core'

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  
}


