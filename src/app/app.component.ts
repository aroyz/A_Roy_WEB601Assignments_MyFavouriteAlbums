import { Component } from '@angular/core';
import {MessageService} from "./services/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Roy_MyFavouriteAlbums';

  constructor(private messageService : MessageService) {  }

  newMessage(newMessage : string) {
    this.messageService.add(newMessage);
  }
}
