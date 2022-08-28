import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/customer';
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {

  constructor(private customerservice: CustomerService) { }

  model = new Customer('','', '');
  confirm = false;
  submitted: boolean = false;

  onSubmit() {
    this.confirm = true
    let req = this.customerservice.createCustomer(this.model);
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
