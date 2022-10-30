import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { OlympicComponent } from './olympic/olympic.component';
import { PopupComponent } from './popup/popup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'olympic', component: OlympicComponent },
  { path: 'popup', component: PopupComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
