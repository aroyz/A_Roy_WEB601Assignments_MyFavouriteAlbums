import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Content } from "../helper-files/content-interface";
import { MatDialogRef } from "@angular/material/dialog";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent implements OnInit {
  isValid = false;
  isSubmitted = false;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags : string[] = [];

  constructor(private dialogRef: MatDialogRef<AddContentDialogComponent>) { }

  ngOnInit(): void {
  }

  //form
  save(content : NgForm) {
    this.isSubmitted = true;
    if (content.value.title && content.value.description && content.value.creator) {
      this.isValid = true;
      Object.keys(content.value).forEach((key : any) => {
        if (!content.value[key]) {
          delete content.value[key];
        }
      });
      if (this.tags.length) {content.value.tags = this.tags;}
      this.dialogRef.close(content.value);
      content.resetForm();
    }
    else {
      this.isValid = false;
    }
  }
  close () {
    this.dialogRef.close();
  }

  //chips
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }
  remove(tag : string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
