import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Content } from "../helper-files/content-interface";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
export class AddContentDialogComponent implements OnInit {
  isValid = false;
  isSubmitted = false;

  constructor(private dialogRef: MatDialogRef<AddContentDialogComponent>) { }

  ngOnInit(): void {
  }

  save(content : NgForm) {
    this.isSubmitted = true;
    if (content.value.title && content.value.description && content.value.creator) {
      this.isValid = true;
      Object.keys(content.value).forEach((key : any) => {
        if (!content.value[key]) {
          delete content.value[key];
        }
      });
      if (content.value.tags) {content.value.tags = content.value.tags.split(',');}
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
}
