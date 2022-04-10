import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MusicService } from "../services/music.service";
import {Content} from "../helper-files/content-interface";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id? : number;
  content? : Content;

  constructor(private route : ActivatedRoute, private musicService : MusicService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0);
      this.musicService.getSingleContent(this.id).subscribe((c) => {
        this.content = c;
        this.messageService.add("Loaded content at id " + this.id + " with title " + this.content.title);
      });
    });
  }

}
