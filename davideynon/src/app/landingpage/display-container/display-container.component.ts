import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-container',
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.css']
})
export class DisplayContainerComponent implements OnInit {

  constructor() { }

  @Input() selectedProject: any;
  
  ngOnInit(): void {
  }

}
