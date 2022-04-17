import {Component, OnInit} from '@angular/core';
import {MessageService} from "./services/message.service";
import {MusicService} from "./services/music.service";
import {Content} from "./helper-files/content-interface";
import {LogUpdateService} from "./services/log-update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'A_Roy_MyFavouriteAlbums';
  topContent?: Content;
  notFoundMessage?: string;

  constructor(private messageService : MessageService, private musicService : MusicService, private logService: LogUpdateService) {  }

  ngOnInit() {
    // this.musicService.getSingleContent(5).subscribe({
    //   next: ((content) => { if(content) {this.topContent = content} }),
    //   error: ((error) => { this.messageService.add(error) }),
    //   complete: (() => { this.messageService.add("Content Item at id: 5") })
    // });
    this.logService.init();
  }

  // newMessage(newMessage : string) {
  //   this.messageService.add(newMessage);
  // }

  searchEvent(id : string) {
    this.musicService.getSingleContent(parseInt(id)).subscribe({
      next: ((content) => { this.searchEventNext(content, parseInt(id)) }),
      error: ((error) => { this.searchEventError(error) })
    });
  }
  searchEventNext (input : Content, id : number) {
    this.topContent = input;
    this.notFoundMessage = '';
    this.messageService.add(`Content Item at id: ${id}`)
  }
  searchEventError (input : string) {
    this.notFoundMessage = 'There is no music with that Id. Please try again.';
    this.messageService.add(`There is no music with that Id. Please try again.`);
  }
}
