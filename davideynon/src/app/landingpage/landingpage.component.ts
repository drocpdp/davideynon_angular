import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../../db-data';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {


  constructor(private route: ActivatedRoute) { 
  }

  title = 'davideynon';
  projectIdx: any;
  projects = PROJECTS;
  selectedProject: any;

  ngOnInit(): void {
    // default
    this.projectIdx = 0;

    // get url parameter
    const param = this.route.snapshot.paramMap.get('project');

    // root url
    if (param === 'olympic'){
      this.projectIdx = 1;
    }
    if (param === 'popup'){
      this.projectIdx = 2;
    }
    this.selectedProject = PROJECTS[this.projectIdx];

  }

  @Input()
  directedProject: any;

  onClickedProjectEmitted(selected: any){
    this.selectedProject = selected;
  }  
}
