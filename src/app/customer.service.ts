import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
constructor(private http: HttpClient) { }

  url="http://127.0.0.1:8080/ticket/add/";


  createTicket(ticket:Ticket): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    let email = ticket.email;
    let summary = ticket.summary;
    let type = ticket.type;
    let body = "email="+email+"&"+"summary="+summary+"&"+"type="+type;
    return this.http.post(this.url, body, httpOptions);
  }
}
