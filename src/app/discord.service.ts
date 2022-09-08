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
  #url="http://127.0.0.1:8080";

  public sendNotif(input:String): Observable<any> {
    let discordhttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = '{"username":"KoontsNET", "content":"'+input+'"}'
    return this.http.post(this.url, body, discordhttpOptions);
  }

  createTicket(ticket:Ticket): Observable<any> {
    let ds = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    let body = "name="+ticket.name+"&"+"email="+ticket.email+"&"+"message="+ticket.message;

    return this.http.post(this.url, body, ds);
  }

}
