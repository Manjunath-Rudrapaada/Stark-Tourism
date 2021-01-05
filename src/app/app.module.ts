import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AndraComponent } from './andra/andra.component';
import { AssamComponent } from './assam/assam.component';
import { GoaComponent } from './goa/goa.component';
import { HimachalComponent } from './himachal/himachal.component';
import { JkComponent } from './jk/jk.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { KeralaComponent } from './kerala/kerala.component';
import { MeghalayaComponent } from './meghalaya/meghalaya.component';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { SikkimComponent } from './sikkim/sikkim.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AndraComponent,
    AssamComponent,
    GoaComponent,
    HimachalComponent,
    JkComponent,
    KarnatakaComponent,
    KeralaComponent,
    MeghalayaComponent,
    RajasthanComponent,
    SikkimComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
