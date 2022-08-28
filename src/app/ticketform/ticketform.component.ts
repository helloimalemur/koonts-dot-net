import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { TicketService } from "../ticket.service";


@Component({
  selector: 'app-ticketform',
  templateUrl: './ticketform.component.html',
  styleUrls: ['./ticketform.component.css']
})
export class TicketformComponent implements OnInit {

  constructor(private ticketservice: TicketService) { }

  type = ['Mac', 'Windows',
    'Linux', 'Chrome OS'];

  model = new Ticket('', '', '');
  submitted = false;

  onSubmit() {
    this.submitted = true
    this.ticketservice.createTicket(this.model);

  };
  clearForm() {
    this.model.email = '';
    this.model.summary = '';
    this.model.type = '';
  }

  ngOnInit(): void {
  }

}
