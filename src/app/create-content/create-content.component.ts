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
  isValid = false;
  isSubmitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(content : NgForm) {
    this.isSubmitted = true;

    let contentPromise = new Promise((success, fail) => {
      if (content.value.id && content.value.title && content.value.description && content.value.creator) {
        this.isValid = true;
        content.value.tags = content.value.tags.split(',');
        this.newContent = content.value;
        this.newContentEvent.emit(this.newContent);
        content.resetForm();
        success(`Addition was successful! ${this.newContent?.title}`);
      }
      else {
        this.isValid = false;
        fail("Addition failed")
      }
    });

    contentPromise.then(successResult => console.log(successResult)).catch(failResult => console.log(failResult));
  }
}
