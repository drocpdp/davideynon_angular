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
    // get url parameter
    this.projectIdx = this.route.snapshot.paramMap.get('project');

    console.log(this.projectIdx)    
    // root url
    if (!this.projectIdx){
      this.projectIdx = 0;
    }
    if (this.projectIdx === 'olympic'){
      this.projectIdx = 1;
    }
    if (this.projectIdx === 'popup'){
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
