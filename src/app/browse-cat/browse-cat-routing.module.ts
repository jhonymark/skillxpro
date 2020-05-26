import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseCatPage } from './browse-cat.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseCatPageRoutingModule {}
