import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../../db-data';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'davideynon';

  projects = PROJECTS;
  selectedProject = PROJECTS[0];

  clickedProject(proj:any){
    this.selectedProject = proj;
  }
}
