import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectGuard } from './project.guard';


const routes: Routes = [  
  { path: ':project', component: LandingpageComponent, canActivate: [ProjectGuard] },
  { path: '', component: LandingpageComponent },  
  { path: '**', pathMatch: 'prefix', component: PagenotfoundComponent },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
