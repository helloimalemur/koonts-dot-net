import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { TicketService } from "../ticket.service";
import { DiscordnotifComponent } from "../discordnotif/discordnotif.component";
import {DiscordService} from "../discord.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-ticketform',
  templateUrl: './ticketform.component.html',
  styleUrls: ['../app.component.css']
})
export class TicketformComponent implements OnInit {

  constructor(private ticketservice: TicketService, private discordservice: DiscordService) {

  }

  model = new Ticket('','', '');
  confirm = false;
  submitted: boolean = false;


  onSubmit() {
    this.confirm = true
    let reqq = this.discordservice.sendNotif(this.model.name);
    reqq.subscribe();
    let req = this.ticketservice.createTicket(this.model);
    req.subscribe();



  }
  clearForm() {
    this.model.name = '';
    this.model.email = '';
    this.model.message = '';

  }

  ngOnInit(): void {
  }

}
