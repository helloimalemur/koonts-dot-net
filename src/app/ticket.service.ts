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
  email = '';
  summary = '';
  type = '';

  url="http://localhost:8000/";


  setEmail(email:string) {this.email = email;}
  setSummary(summary:string) {this.summary = summary;}
  setType(type:string) {this.type = type;}


  createTicket(ticket:Ticket): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    return this.http.post(this.url, ticket, httpOptions);
  }
}
