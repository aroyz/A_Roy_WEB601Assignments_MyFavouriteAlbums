import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent implements OnInit {

  @Input() content?: Content;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick () {
    console.log(`
    ID: ${this.content?.id}
    Title: ${this.content?.title}
    `);
  }

}
