import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {

  model = new Customer('','', '');
  confirm = false;
  submitted: boolean = false;

  onSubmit() {
    this.confirm = true
    let req = this.ticketservice.createCustomer(this.model);
    req.subscribe();

  };
  clearForm() {
    this.model.email = '';
    this.model.name = '';
    this.model.phone = '';
  }

  ngOnInit(): void {
  }

}
