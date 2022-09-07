import {Component} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Koonts Consulting';
  public minibar:boolean = false;
  public portfolio:boolean = false;

  constructor(
    //private overlayContainer:OverlayContainer
  ) {}

  toggleMiniBar() {
    if(this.minibar) {
      this.minibar = false;
    }
    if(!this.minibar) {
      this.minibar = true;
    }
  }

  togglePortfolio() {
    if(this.portfolio) {
      this.portfolio = false;
    }
    if(!this.portfolio) {
      this.portfolio = true;
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

  // Change style of navbar on scroll



  myFunction() {
    let navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      // @ts-ignore
      navbar.className = "fx-bar" + " fx-card" + " fx-animate-top" + " fx-white";
    } else {
      // @ts-ignore
      navbar.className = navbar.className.replace(" fx-card fx-animate-top fx-white", "");
    }
  }

  // Used to toggle the menu on small screens when clicking on the menu button
  toggleFunction() {
    var x = document.getElementById("navDemo");
    // @ts-ignore
    if (x.className.indexOf("fx-show") == -1) {
      // @ts-ignore
      x.className += " fx-show";
    } else {
      // @ts-ignore
      x.className = x.className.replace(" fx-show", "");
    }
  }

}
