import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: Content[] = [];

  constructor() {
    this.contentList = [
      {
        id: 1,
        title: "Blonde",
        description: "Blonde (alternatively titled blond) is the second studio album by American singer Frank Ocean. It was released on August 20, 2016, as a timed exclusive on the iTunes Store and Apple Music.",
        creator: "Frank Ocean",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/220px-Blonde_-_Frank_Ocean.jpeg"
      },
      {
        id: 2,
        title: "Lemonade",
        description: "Lemonade is the sixth studio album by American singer Beyoncé. It was released on April 23, 2016, by Parkwood Entertainment and Columbia Records, accompanied by a 65-minute film of the same title on HBO.",
        creator: "Beyoncé",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png/220px-Beyonce_-_Lemonade_%28Official_Album_Cover%29.png"
      },
      {
        id: 3,
        title: "Hozier",
        description: "Hozier is the debut studio album from Irish musician Hozier. The album was released on 19 September 2014 through Island Records and Rubyworks Records.",
        creator: "Hozier",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Hozier_album.jpg/220px-Hozier_album.jpg"
      },
      {
        id: 4,
        title: "Channel Orange",
        description: "Channel Orange is the debut studio album by American R&B singer-songwriter Frank Ocean. It was released on July 10, 2012, by Def Jam Recordings.",
        creator: "Frank Ocean",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Channel_ORANGE.jpg/220px-Channel_ORANGE.jpg",
      },
      {
        id: 5,
        title: "Illinois",
        description: "Illinois (styled Sufjan Stevens Invites You To: Come On Feel the ILLINOISE on the cover; sometimes written as Illinoise) is a 2005 concept album by American singer-songwriter Sufjan Stevens. His fifth studio album, it features songs referencing places, events, and persons related to the U.S. state of Illinois.",
        creator: "Sufjan Stevens",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Sufjan_Stevens_-_Illinois.jpg/220px-Sufjan_Stevens_-_Illinois.jpg"
      },
      {
        id: 6,
        title: "Dirty Computer",
        description: "Dirty Computer is the third studio album by American singer and songwriter Janelle Monáe, released on April 27, 2018, by Wondaland Arts Society, Bad Boy Records and Atlantic Records.",
        creator: "Janelle Monáe",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/DirtyComputer.png/220px-DirtyComputer.png"
      }
    ]
  }

  ngOnInit(): void {

  }

}
