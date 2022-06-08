import { Component, OnInit , Input } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers: Customer[] = [];
  selectedCustomer: Customer;
  @Input() city: string;
  ngOnInit(): void {
    this.customers = [
      { id: 1, firstName: "Şahincan", lastName: "Özbakır", age: 28 },
      { id: 2, firstName: "Deniz Bilen", lastName: "Özbakır", age: 29 },
      { id: 3, firstName: "Laçin", lastName: "Özbakır", age: 1 },
      { id: 4, firstName: "Cookie", lastName: "Özbakır", age: 2 },
    ]
  }
  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer
    console.log(customer);
    console.log(this.selectedCustomer);
  }

}
