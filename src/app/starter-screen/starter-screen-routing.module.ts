import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterScreenPage } from './starter-screen.page';

const routes: Routes = [
  {
    path: '',
    component: StarterScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterScreenPageRoutingModule {}
