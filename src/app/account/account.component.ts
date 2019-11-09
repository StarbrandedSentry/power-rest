import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  readonly ROOT_URL = 'https://power-rest.firebaseapp.com/api/v1';
  accounts: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accounts = this.http.get(this.ROOT_URL + '/accounts');
  }
}
