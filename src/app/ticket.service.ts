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
  url="https://localhost:8000";
  httpHeaders = new HttpHeaders({
    'Content-Type':'application/json',
    'Cache-Control':'no-cache',
  });
  options = { headers:this.httpHeaders };


  createTicket(ticket:Ticket): Observable<any> {
    return this.http.post(this.url, ticket, this.options)
  }
}
