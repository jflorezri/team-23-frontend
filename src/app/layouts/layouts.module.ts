import { NgModule } from '@angular/core';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VerticalComponent } from './vertical/vertical.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    FooterComponent,
    VerticalComponent,
    SidebarComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
