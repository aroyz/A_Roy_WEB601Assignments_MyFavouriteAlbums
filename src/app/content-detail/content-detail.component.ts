import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MusicService } from "../services/music.service";
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id? : number;
  content? : Content;

  constructor(private route : ActivatedRoute, private musicService : MusicService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0);
      this.musicService.getSingleContent(this.id).subscribe((c) => {
        this.content = c;
      });
    });
  }

}
