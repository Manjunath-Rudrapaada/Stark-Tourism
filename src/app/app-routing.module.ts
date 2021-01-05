import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [

  {
    path : '', component : HomeComponent, pathMatch : 'full'
  },
  {
    path : 'andra', component : AndraComponent
  },
  {
    path : 'assam', component : AssamComponent
  },
  {
    path : 'goa', component : GoaComponent
  },
  {
    path : 'himachal', component : HimachalComponent
  },
  {
    path : 'jk', component : JkComponent
  },
  {
    path : 'karnataka', component : KarnatakaComponent
  },{
    path : 'kerala', component : KeralaComponent
  },
  {
    path : 'meghalaya', component : MeghalayaComponent
  },
  {
    path : 'rajasthan', component : RajasthanComponent
  },
  {
    path : 'sikkim', component : SikkimComponent
  },
  {
    path : 'aboutus', component : AboutusComponent
  },
  {
    path : 'contact', component : ContactComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
