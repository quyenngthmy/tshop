import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavBarTopComponent } from './content/navbartop/navbartop.component';
import { NavbarheaderComponent } from './content/navbartop/navbarheader/navbarheader.component';
import { ActionbarComponent } from './content/navbartop/actionbar/actionbar.component';
import { BoxmessageComponent } from './content/box_msg/box_msg.component';
import { InfocustomerComponent } from './content/info_customer/info_customer.component';
import { ListmsgComponent } from './content/list_msg/list_msg.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    NavBarTopComponent,
    NavbarheaderComponent,
    ActionbarComponent,
    BoxmessageComponent,
    InfocustomerComponent,
    ListmsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
