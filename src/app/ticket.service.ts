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
  url="http://localhost:8000";
  httpHeaders = new HttpHeaders({
    'Content-Type':'text/plain',
    'Cache-Control':'no-cache',
  });
  options = { headers:this.httpHeaders };


  createTicket(ticket:Ticket): Observable<any> {
    this.http.get("localhost:8000");
    this.http.get(this.url, this.options);
    return this.http.post(this.url, ticket, this.options);
  }
}
