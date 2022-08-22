import {Component, OnInit} from '@angular/core';
import { CustomerComponent } from "./customer/customer.component";
import { TicketComponent } from "./ticket/ticket.component";
import {OverlayContainer} from "@angular/cdk/overlay";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Koonts Consulting';
  //themeClass: String;

  constructor(
    //private overlayContainer:OverlayContainer
  ) {}
}
