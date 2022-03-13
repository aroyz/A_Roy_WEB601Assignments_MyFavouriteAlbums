import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {contentDb} from "../helper-files/contentDb";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getContent() : Observable<Content[]> {
    return of(contentDb);
  }

  getSingleContent(id : number) : Observable<Content | null> {
    let singleContent = contentDb.find(c => c.id === id);
    if (singleContent) {
      return of(singleContent);
    }
    else {
      return of(null);
    }
  }

}
