import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { TicketComponent } from './ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'customer-component', component: CustomerComponent },
  { path: 'ticket-component', component: TicketComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
