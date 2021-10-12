import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { FolioLinkDelinkComponent } from './folio-link-delink/folio-link-delink.component';
import { SwitchComponent } from './switch/switch.component';
import { SwpComponent } from './swp/swp.component';
const routes: Routes = [{
  path: 'pro', component: ProductListingComponent
},
{path: 'pro1', component: AccountStatementComponent
},
{path: 'folio', component: FolioLinkDelinkComponent
},
{path: 'switch', component: SwitchComponent
},
{path: 'swp', component: SwpComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
