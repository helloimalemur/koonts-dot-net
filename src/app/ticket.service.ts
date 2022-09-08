import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Ticket} from "./ticket/ticket";
import { HttpHeaders } from "@angular/common/http";
import {DiscordService} from "./discord.service";

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  constructor(private http: HttpClient) { }

  url="http://koonts.net:8080/ticket/add";
  discordurl="https://discordapp.com/api/webhooks/1014319311197847593/jjY11oRqtES_FS7lz330mqi_4rSl-zA_rNvcg2yDySriqStqmuZtntLsF8dKY1sQvrEW";


  createTicket(ticket:Ticket): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    let body = "name="+ticket.name+"&"+"email="+ticket.email+"&"+"message="+ticket.message;

    return this.http.post(this.url, body, httpOptions);
  }

  //sendNotif(input:String): Observable<any> {
  //  let discordhttpOptions = {
  //    headers: new HttpHeaders({
  //      'Content-Type': 'application/json'
  //    })
  //  }
  //  return this.http.post(this.discordurl, input, discordhttpOptions);
  //}

}
