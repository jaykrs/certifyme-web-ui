import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/site/home/home.component';
import { HomebannerComponent } from './components/layout/homebanner/homebanner.component';
import { HomesectionheaderComponent } from './components/layout/homesectionheader/homesectionheader.component';
import { Homebanner2Component } from './components/layout/homebanner2/homebanner2.component';
import { HomecatagoryComponent } from './components/layout/homecatagory/homecatagory.component';
import { Homebanner3Component } from './components/layout/homebanner3/homebanner3.component';
import { HomeventsComponent } from './components/layout/homevents/homevents.component';
import { Homebanner4Component } from './components/layout/homebanner4/homebanner4.component';
import { HometestimonialComponent } from './components/layout/hometestimonial/hometestimonial.component';
import { HomesubscribeComponent } from './components/layout/homesubscribe/homesubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomebannerComponent,
    HomesectionheaderComponent,
    Homebanner2Component,
    HomecatagoryComponent,
    Homebanner3Component,
    HomeventsComponent,
    Homebanner4Component,
    HometestimonialComponent,
    HomesubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
