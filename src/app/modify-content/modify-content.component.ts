import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Content} from "../helper-files/content-interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddContentDialogComponent} from "../add-content-dialog/add-content-dialog.component";

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  newContent = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  emitContent (content : Content) {
    this.newContentEvent.emit(content);
  }

  openDialog () {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddContentDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => { if (data) {this.emitContent(data)} }
    );
  }
}
