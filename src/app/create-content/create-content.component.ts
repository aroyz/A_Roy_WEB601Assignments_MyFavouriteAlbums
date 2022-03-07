import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Content>();
  newContent? : Content;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(content : NgForm) {
    this.newContent = content.value;
    this.newContentEvent.emit(this.newContent);
  }
}
