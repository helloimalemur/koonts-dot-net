import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from "./customer/customer.component";
import { TicketComponent } from "./ticket/ticket.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ConsultingComponent} from "./consulting/consulting.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {TicketformComponent} from "./ticketform/ticketform.component";
import {CustomerformComponent} from "./customerform/customerform.component";
import {HomeComponent} from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'notfound', component: NotfoundComponent},
  { path: 'customer', component: CustomerComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'consulting', component: ConsultingComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {path: 'ticketform', component: TicketformComponent},
  {path: 'customerform', component: CustomerformComponent},
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
