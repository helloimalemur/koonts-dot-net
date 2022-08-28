import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket/ticket';

@Component({
  selector: 'app-ticketform',
  templateUrl: './ticketform.component.html',
  styleUrls: ['./ticketform.component.css']
})
export class TicketformComponent implements OnInit {

  constructor() { }

  type = ['Mac', 'Windows',
    'Linux', 'Chrome OS'];

  model = new Ticket('test@gmail.com', 'test summary', 'mac');
  submitted = false;

  onSubmit() {this.submitted = true};

  ngOnInit(): void {
  }

}
