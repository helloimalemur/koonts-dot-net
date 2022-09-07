import {Component} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'James Koonts';
  public minibar:boolean = false;
  public portfolio:boolean = false;

  constructor(
    //private overlayContainer:OverlayContainer
  ) {}

  viewMiniBar() {
    if(!this.minibar) {
      this.minibar = true;
    }
  }

  closeMiniBar() {
    if(this.minibar) {
      this.minibar = false;
    }
  }

  viewPortfolio() {
    if(!this.portfolio) {
      this.portfolio = true;

    }
  }
  closePortfolio() {
    if(this.portfolio) {
      this.portfolio = false;
    }
  }


  onClick() {
    // @ts-ignore
    document.getElementById("img01").src = element.src;
    // @ts-ignore
    document.getElementById("modal01").style.display = "block";
    let captionText = document.getElementById("caption");
    // @ts-ignore
    captionText.innerHTML = element.alt;
  }

}
