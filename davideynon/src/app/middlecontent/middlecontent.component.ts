import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { PROJECTS } from '../../db-data';

@Component({
  selector: 'app-middlecontent',
  templateUrl: './middlecontent.component.html',
  styleUrls: ['./middlecontent.component.css']
})
export class MiddlecontentComponent implements OnInit {

  constructor() { }

  projects = PROJECTS;
  currTitle = "";
  displayProject = PROJECTS[0];

  ngOnInit(): void {
  }


  clickProject(project:any){
    this.displayProject = project;
  }

}
