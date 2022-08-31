import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ticket} from "./ticket/ticket";
import {Observable} from "rxjs";
import {notif} from "./discordnotif/notif";

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  constructor(private http: HttpClient) { }

  url="https://discordapp.com/api/webhooks/1014319311197847593/jjY11oRqtES_FS7lz330mqi_4rSl-zA_rNvcg2yDySriqStqmuZtntLsF8dKY1sQvrEW";


  sendNotif(input:String): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.url, input, httpOptions);
  }
}
