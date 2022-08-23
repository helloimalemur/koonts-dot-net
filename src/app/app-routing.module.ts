import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from "./customer/customer.component";
import { TicketComponent } from "./ticket/ticket.component";

const routes: Routes = [
  { path: 'customer-component', component: CustomerComponent },
  { path: 'ticket-component', component: TicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
