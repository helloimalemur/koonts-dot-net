import { Component, OnInit } from '@angular/core';
import {DiscordService} from "../discord.service";
import { notif } from "./notif";

@Component({
  selector: 'app-discordnotif',
  templateUrl: './discordnotif.component.html',
  styleUrls: ['./discordnotif.component.css']
})
export class DiscordnotifComponent implements OnInit {

  constructor(private discordservice: DiscordService) {

  }

  public sendMessage() {
    let json = JSON.stringify("message");
    let req = this.discordservice.sendNotif(json);
    req.subscribe();
  }


  ngOnInit(): void {
  }

}
