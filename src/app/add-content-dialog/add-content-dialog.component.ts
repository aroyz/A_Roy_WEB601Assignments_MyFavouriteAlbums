import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  contentItem? : [];
  isValid = false;
  isSubmitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(content : NgForm) {
    this.isSubmitted = true;

    if (content.value.title && content.value.description && content.value.creator) {
      this.isValid = true;
      Object.keys(content.value).forEach((key : any) => {
        if (!content.value[key]) {
          delete content.value[key];
        }
      });
      if (content.value.tags) {content.value.tags = content.value.tags.split(',');}
      this.newContentEvent.emit(content.value);
      content.resetForm();
    }
    else {
      this.isValid = false;
    }
  }
}
