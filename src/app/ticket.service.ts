import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Ticket} from "./ticket/ticket";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  constructor(private http: HttpClient) { }

  url="http://127.0.0.1:8080/ticket/add/";


  createTicket(ticket:Ticket): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    let body = "name="+ticket.name+"&"+"email="+ticket.email+"&"+"message="+ticket.message;
    return this.http.post(this.url, body, httpOptions);
  }
}
