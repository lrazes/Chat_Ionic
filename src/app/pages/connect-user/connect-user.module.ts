import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectUserPageRoutingModule } from './connect-user-routing.module';

import { ConnectUserPage } from './connect-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectUserPageRoutingModule
  ],
  declarations: [ConnectUserPage]
})
export class ConnectUserPageModule {}
