import {Component, OnInit} from '@angular/core';
import {MessageService} from "./services/message.service";
import {MusicService} from "./services/music.service";
import {Content} from "./helper-files/content-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'A_Roy_MyFavouriteAlbums';
  topContent?: Content;

  constructor(private messageService : MessageService, private musicService : MusicService) {  }

  ngOnInit() {
    this.musicService.getSingleContent(5).subscribe({
      next: ((content) => { if(content) {this.topContent = content} }),
      error: ((error) => { this.messageService.add(error) }),
      complete: (() => { this.messageService.add("Content Item at id: 5") })
    });
  }

  newMessage(newMessage : string) {
    this.messageService.add(newMessage);
  }
}
