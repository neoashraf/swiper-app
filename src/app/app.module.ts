import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule } from '@angular/material';

import { SwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';
import { SwiperNavigationComponent } from './swiper-navigation/swiper-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    SwiperNavigationComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
