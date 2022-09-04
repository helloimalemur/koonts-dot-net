import { Component, OnInit } from '@angular/core';
import {DiscordService} from "../discord.service";
import { notif } from "./notif";

@Component({
  selector: 'app-discordnotif',
  templateUrl: './discordnotif.component.html',
  styleUrls: ['./discordnotif.component.css']
})
export class DiscordnotifComponent implements OnInit {
  private static discordservice: DiscordService;

  constructor(private discordservice: DiscordService) {

  }

  public static sendMessage(string:string) {
    let n = new notif(string);
    let json = JSON.stringify(n);
    let req = this.discordservice.sendNotif(json);
    req.subscribe();
  }


  ngOnInit(): void {
  }

}
