import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'endpoints' },
  { path: 'endpoints', component: ProductListComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
