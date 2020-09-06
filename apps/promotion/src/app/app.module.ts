import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { DiscountsComponent } from './discounts/discounts.component';
import {GridComponent} from './grid/grid.component';
import {FormCellComponent} from './grid/form-cell/form-cell.component';
import {AppRouterModule} from "./app-router.module";
import {AgGridModule} from "ag-grid-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BranchService} from "./grid/branch.service";

@NgModule({
  declarations: [AppComponent, DiscountsComponent,GridComponent,FormCellComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    AppRouterModule,
    AgGridModule.withComponents([FormCellComponent]),

  ],
  providers: [BranchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
