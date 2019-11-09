import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  items: Array<any> = [
    // {subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
    {subject: 'Accounts'},
    {subject: 'PhilAm Life Products'},
    {subject: 'PhilAm Life Vitality'},
    {subject: 'Reward'},
    {subject: 'Payment'},
    {subject: 'Research Product'},
  ];

  constructor() { }

  ngOnInit() {

  }

}
