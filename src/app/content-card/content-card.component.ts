import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ContentList } from "../helper-files/content-list";
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ContentCardComponent implements OnInit {
  contentList : ContentList;
  item1 : Content;
  item2 : Content;
  item3 : Content;

  // id : number;
  // title : string;
  // description : string;
  // creator : string;
  // imgURL? : string;
  // type? : string;
  // tags? : string[];
  //
  // constructor(id : number, title : string, description : string, creator : string, imageURL = "", type = "", tags = [] ) {
  //     this.id = id;
  //     this.title = title;
  //     this.description = description;
  //     this.creator = creator;
  //     this.imgURL = imageURL;
  //     this.type = type;
  //     this.tags = tags;
  // }
  //im so confused :(

  constructor() {
      this.contentList = new ContentList();

      // album 1
      this.item1 = {
        id: 1,
        title: "Blonde",
        description: "Blonde (alternatively titled blond) is the second studio album by American singer Frank Ocean. It was released on August 20, 2016, as a timed exclusive on the iTunes Store and Apple Music.",
        creator: "Frank Ocean",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/220px-Blonde_-_Frank_Ocean.jpeg"
      }
      this.contentList.addItem(this.item1);

      // album 2
      this.item2 = {
        id: 2,
        title: "Lemonade",
        description: "Lemonade is the sixth studio album by American singer Beyoncé. It was released on April 23, 2016, by Parkwood Entertainment and Columbia Records, accompanied by a 65-minute film of the same title on HBO.",
        creator: "Beyoncé",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png/220px-Beyonce_-_Lemonade_%28Official_Album_Cover%29.png"
      }
      this.contentList.addItem(this.item2);

      // album 3
      this.item3 = {
        id: 3,
        title: "Hozier",
        description: "Hozier is the debut studio album from Irish musician Hozier. The album was released on 19 September 2014 through Island Records and Rubyworks Records.",
        creator: "Hozier",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Hozier_album.jpg/220px-Hozier_album.jpg"
      }
      this.contentList.addItem(this.item3);
  }

  ngOnInit(): void {
  }

}
