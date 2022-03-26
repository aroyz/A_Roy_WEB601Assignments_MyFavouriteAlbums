import { Injectable } from '@angular/core';
import { Content } from "../helper-files/content-interface";
import { contentDb } from "../helper-files/contentDb";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-type' : 'application.json'})
  };

  constructor(private http : HttpClient) { }

  getContent() : Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  getSingleContent(id : number) : Observable<Content> {
    return this.http.get<Content>(`api/content/${id}`);
  }

  addContent(newContentItem : Content) : Observable<Content> {
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem : Content) : Observable<any> {
    return this.http.put("api/content", contentItem, this.httpOptions);
  }
}
