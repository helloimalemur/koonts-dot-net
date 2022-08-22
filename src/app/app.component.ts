import { Component } from '@angular/core';
import { CustomerComponent } from "./customer/customer.component";
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Koonts Consulting';

}
