import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Customer} from "./customer/customer";
import { HttpHeaders } from "@angular/common/http";
import {Ticket} from "./ticket/ticket";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  url="http://127.0.0.1:8080/customer/add/";


  createCustomer(customer:Customer): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    let name = customer.name;
    let email = customer.email;
    let phone = customer.phone;
    let body = "name="+name+"&"+"email="+email+"&"+"phone="+phone;
    return this.http.post(this.url, body, httpOptions);
  }
}
