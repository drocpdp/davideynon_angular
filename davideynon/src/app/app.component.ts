import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { BottommenuComponent } from './bottommenu/bottommenu.component';
import { PROJECTS } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'davideynon';

  projects = PROJECTS;
  selectedProject = PROJECTS[0];

  clickedProject(proj:any){
    this.selectedProject = proj;
  }

  };

