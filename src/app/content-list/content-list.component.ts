import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormsModule} from "@angular/forms";
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: Content[] = [];
  searchMsg: string;

  constructor() {
    this.searchMsg = '';
    this.contentList = [
      {
        id: 1,
        title: "Blonde",
        description: "Blonde (alternatively titled blond) is the second studio album by American singer Frank Ocean. It was released on August 20, 2016, as a timed exclusive on the iTunes Store and Apple Music.",
        creator: "Frank Ocean",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/220px-Blonde_-_Frank_Ocean.jpeg",
        tags: ['R&B', 'Avant-Garde Soul', 'Hip-Hop', 'Psychedelic Pop']
      },
      {
        id: 2,
        title: "Lemonade",
        description: "Lemonade is the sixth studio album by American singer Beyoncé. It was released on April 23, 2016, by Parkwood Entertainment and Columbia Records, accompanied by a 65-minute film of the same title on HBO.",
        creator: "Beyoncé",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png/220px-Beyonce_-_Lemonade_%28Official_Album_Cover%29.png",
        type: "Album"
      },
      {
        id: 3,
        title: "Hozier",
        description: "Hozier is the debut studio album from Irish musician Hozier. The album was released on 19 September 2014 through Island Records and Rubyworks Records.",
        creator: "Hozier",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Hozier_album.jpg/220px-Hozier_album.jpg",
        type: "Album",
        tags: ['Blues', 'Soul', 'Folk', 'Indie Rock']
      },
      {
        id: 4,
        title: "Provider",
        description: "Provider is a song by American singer-songwriter Frank Ocean, released as a single on the seventh episode of Blonded Radio. Shortly after the release, Ocean released a lyric video for the song on his website, with the words on screen being highlighted by a hopping Hello Kitty head.",
        creator: "Frank Ocean",
        type: "Single"
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
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/DirtyComputer.png/220px-DirtyComputer.png",
        type: "Album",
        tags: ['Pop', 'Funk', 'Hip-Hop', 'R&B', 'Neo Soul']
      },
      {
        id: 7,
        title: "Biking",
        description: "Biking is a song by American singer-songwriter Frank Ocean, released as a single on the third episode of Blonded Radio. It features guest vocals from American rappers Jay-Z and Tyler, the Creator.",
        creator: "Frank Ocean",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Frank_Ocean_Biking_Cover.jpg/220px-Frank_Ocean_Biking_Cover.jpg",
        type: "Single",
        tags: ['Alternative Hip-Hop', 'R&B']
      }
    ]
  }

  ngOnInit(): void {

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
