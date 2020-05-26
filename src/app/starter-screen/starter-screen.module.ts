import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarterScreenPageRoutingModule } from './starter-screen-routing.module';

import { StarterScreenPage } from './starter-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarterScreenPageRoutingModule
  ],
  declarations: [StarterScreenPage]
})
export class StarterScreenPageModule {}
