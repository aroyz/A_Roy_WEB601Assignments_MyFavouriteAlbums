import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { Observable, of } from "rxjs";
import { Content } from "../helper-files/content-interface";
import { MusicService } from "../services/music.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  @Output() newMessageEvent = new EventEmitter<string>();
  contentList: Content[] = [];
  topContent?: Content;
  searchMsg: string = '';

  constructor(private musicService: MusicService) {  }

  ngOnInit(): void {
    this.musicService.getContent().subscribe({
      next: ((content) => { this.contentList = content }),
      error: ((error) => { this.newMessageEvent.emit(error) }),
      complete: (() => {this.newMessageEvent.emit("Content Item at id: 5")})
    });
    this.musicService.getSingleContent(5).subscribe({
        next: ((content) => { if(content) {this.topContent = content} }),
        error: ((error) => { this.newMessageEvent.emit(error) }),
        complete: (() => { this.newMessageEvent.emit("Content array loaded!") })
      });
  }

  searchEvent(contentTitle: string) {
      if (this.contentList.some(content => content.title === contentTitle)) {
        this.searchMsg = 'Content exists in list';
      }
      else {
        this.searchMsg = 'Content does not exist in list';
      }
  }

  getClass (searchMsg: string) {
      if (searchMsg === 'Content exists in list') {
        return 'found';
      }
      else {
        return 'not-found';
      }
  }
}
