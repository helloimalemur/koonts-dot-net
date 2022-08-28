import { Injectable } from '@angular/core';

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
    let email = customer.email;
    let name = customer.name;
    let phone = customer.phone;
    let body = "email="+email+"&"+"name="+name+"&"+"phone="+phone;
    return this.http.post(this.url, body, httpOptions);
  }
}
