import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from "./customer/customer.component";
import { TicketComponent } from "./ticket/ticket.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ConsultingComponent} from "./consulting/consulting.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {TicketformComponent} from "./ticketform/ticketform.component";

const routes: Routes = [

  { path: 'consulting-component', component: ConsultingComponent },
  { path: 'customer-component', component: CustomerComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'ticket-component', component: TicketComponent },
  { path: 'ticketform-component', component: TicketformComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
