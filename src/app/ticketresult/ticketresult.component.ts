import { Component, OnInit } from '@angular/core';
import {TicketService} from "../ticket.service";

@Component({
  selector: 'app-ticketresult',
  templateUrl: './ticketresult.component.html',
  styleUrls: ['./ticketresult.component.css']
})
export class TicketresultComponent implements OnInit {

  constructor(private ticketservice :TicketService) { }

  ngOnInit(): void {
    let tickets = this.ticketservice
  }

}
