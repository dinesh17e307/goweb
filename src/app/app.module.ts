import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatVideoModule } from 'mat-video';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,MatButtonModule,MatGridListModule,MatVideoModule,MatListModule,MatIconModule,MatSidenavModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
