import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ticket} from "./ticket/ticket";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  constructor(private http: HttpClient) { }

  url="https://discordapp.com/api/webhooks/1014319311197847593/jjY11oRqtES_FS7lz330mqi_4rSl-zA_rNvcg2yDySriqStqmuZtntLsF8dKY1sQvrEW";


  sendNotif(input:String): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    return this.http.post(this.url, body, httpOptions);
  }
}
