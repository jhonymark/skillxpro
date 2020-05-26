import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseCatPageRoutingModule } from './browse-cat-routing.module';

import { BrowseCatPage } from './browse-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseCatPageRoutingModule
  ],
  declarations: [BrowseCatPage]
})
export class BrowseCatPageModule {}
