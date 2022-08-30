import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ticket} from "./ticket/ticket";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  constructor(private http: HttpClient) { }

  url="http://127.0.0.1:8080/ticket/add/";


  sendNotif(input:String): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    return this.http.post(this.url, body, httpOptions);
  }
}
