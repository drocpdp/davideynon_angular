import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent implements OnInit {

  @Input() allProjects: any;
  @Output() emitClickedProject = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickProjectCard(proj:any){
    this.emitClickedProject.emit(proj);
  }

}
