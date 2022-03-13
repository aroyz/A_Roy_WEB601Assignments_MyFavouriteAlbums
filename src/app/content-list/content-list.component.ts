import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Observable, of } from "rxjs";
import { Content } from "../helper-files/content-interface";
import { MusicService } from "../services/music.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: Content[] = [];
  topContent?: Content;
  searchMsg: string = '';

  constructor(private musicService: MusicService) {  }

  ngOnInit(): void {
    this.musicService.getContent().subscribe(content => this.contentList = content);
    this.musicService.getSingleContent(5).subscribe(content => { if(content) {this.topContent = content} });
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
