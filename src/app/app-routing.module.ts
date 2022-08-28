import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from "./customer/customer.component";
import { TicketComponent } from "./ticket/ticket.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ConsultingComponent} from "./consulting/consulting.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {TicketformComponent} from "./ticketform/ticketform.component";
import {HomeComponent} from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  { path: '', redirectTo: 'home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponent },
  { path: 'notfound-component', component: NotfoundComponent},
  { path: 'customer-component', component: CustomerComponent },
  { path: 'ticket-component', component: TicketComponent },
  { path: 'consulting-component', component: ConsultingComponent},
  { path: 'portfolio-component', component: PortfolioComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: 'about-component', component: AboutComponent },
  { path: '**', redirectTo: 'notfound-component' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
