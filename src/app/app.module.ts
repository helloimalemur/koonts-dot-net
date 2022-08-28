import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { TicketComponent } from './ticket/ticket.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TicketformComponent } from './ticketform/ticketform.component';
import {FormsModule} from "@angular/forms";
import { CustomerformComponent } from './customerform/customerform.component';


const routes: Routes = [
  { path: 'customer-component', component: CustomerComponent },
  { path: 'ticket-component', component: TicketComponent },
  { path: 'consulting-component', component: ConsultingComponent},
  { path: 'portfolio-component', component: PortfolioComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: 'about-component', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TicketComponent,
    ConsultingComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    TicketformComponent,
    CustomerformComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
