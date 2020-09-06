import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {DiscountsComponent} from "./discounts/discounts.component";
import {AppComponent} from "./app.component";
import {GridComponent} from "./grid/grid.component";

const  routes:Routes=[
  {
    path:'discounts',
    component:DiscountsComponent
  },
  {
    path:'poc',
    component:GridComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
  ],
  exports: [ RouterModule]
})
export class AppRouterModule { }
