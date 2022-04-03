import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();

  constructor() { }

  ngOnInit(): void {
  }

  emitContent (content : Content) {
    this.newContentEvent.emit(content);
  }
}
