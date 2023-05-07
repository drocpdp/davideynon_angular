import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { BottommenuComponent } from './bottommenu/bottommenu.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplayContainerComponent } from './landingpage/display-container/display-container.component';
import { ProjectCardsComponent } from './landingpage/project-cards/project-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    BottommenuComponent,
    LandingpageComponent,
    DisplayContainerComponent,
    ProjectCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
