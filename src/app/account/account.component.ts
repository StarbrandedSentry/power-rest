import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Account {

  id?: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  contact_number?: string;
  address?: string;
  total_premium?: number;

}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  readonly ROOT_URL = 'https://power-rest.firebaseapp.com/api/v1';
  accounts: Observable<Account[]>;
  rAccounts: Account[];
  id: string;
  account: Observable<any>;
  rAccount: any;

  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  address: string = '';
  contactNumber: string = '';
  totalPremium: number = 0;
  //TODO message
  message: string = '';
  constructor(private http: HttpClient, private af: AngularFirestore) { }

  ngOnInit() {
    // this.getAccounts();

    this.accounts = this.af.collection('accounts', ref => ref.orderBy('first_name', 'desc')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Account;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
    this.accounts.subscribe(account => {
      this.rAccounts = account;
      console.log(this.rAccounts);
    });
  }

  getAccount() {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.account = this.http.get(this.ROOT_URL + '/accounts/' + this.id);
    this.account.subscribe(acc => {
      // this.rAccount = acc;
      console.log(acc);
      this.firstName = acc.first_name;
      this.middleName = acc.middle_name;
      this.lastName = acc.last_name;
      this.address = acc.address;
      this.contactNumber = acc.contact_number;
      this.totalPremium = acc.total_premium;
    });
  }

  update() {
    console.log('update fired');
    const update: Account = {
      first_name: this.firstName,
      middle_name: this.middleName,
      last_name: this.lastName
    }

    this.http.patch(this.ROOT_URL + '/accounts/' + this.id, update).subscribe(res => {
      this.message = 'Update complete!';
    }, error => {
      console.log(error);
    })
      ;
  }

  removeMessage() {
    this.message = '';
  }

}
