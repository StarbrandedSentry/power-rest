import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  public appPages = [
    {
      title: 'Accounts',
      url: './../../assets/images/accounts.png'
    },

    {
      title: 'PhilAm Life Products',
      url: './../../assets/images/products.jpg',
    },
  
    {
      title: 'PhilAm Life Vitality',
      url: './../../assets/images/vitality.jpg'
    },
    {
      title: 'Reward',
      url: './../../assets/images/rewards.png'
    }
    ,
    {
      title: 'Payment',
      url: './../../assets/images/payments.png',
    },
    {
      title: 'Research Product',
      url: '/contribution',
    }
  ];

  // items: Array<any> = [
  //   {subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
  //   {subject: 'Accounts'},
  //   {subject: 'PhilAm Life Products'},
  //   {subject: 'PhilAm Life Vitality'},
  //   {subject: 'Reward'},
  //   {subject: 'Payment'},
  //   {subject: 'Research Product'},
  // ];

  constructor() { }

  ngOnInit() {

  }

}
