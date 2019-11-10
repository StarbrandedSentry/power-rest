import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Account {
  id: {
    first_name: string;
  }

}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  readonly ROOT_URL = 'https://power-rest.firebaseapp.com/api/v1';
  accounts: Observable<any>;
  rAccounts: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getAccounts();

  }

  getAccounts() {
    //const headers = new HttpHeaders().set('Content-Type', 'application/json');
    //this.http.get(this.ROOT_URL + '/accounts');


  }
}
