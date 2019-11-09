import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AccountComponent } from './account/account.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { RewardInfoComponent } from './reward-info/reward-info.component';
import { ProductInfoComponent } from './product-info/product-info.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'endpoints' },
  { path: 'endpoints', component: ProductListComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account-info', component: AccountInfoComponent},
  { path: 'reward-info', component: RewardInfoComponent},
  { path: 'product-info', component: ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
