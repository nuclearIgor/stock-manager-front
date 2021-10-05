import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ReportsComponent } from './views/reports/reports.component';
import { ProductTableComponent } from './components/product/product-table/product-table.component';
import { NavBarComponent } from './components/templates/nav-bar/nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog'

import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './components/templates/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {StoreModule} from "@ngrx/store";
import * as fromReducers from "./store/reducers";
import {EffectsModule} from '@ngrx/effects'
import {ProductsEffects} from "./store/effects";
import { LogoComponent } from './components/templates/logo/logo.component';
import { NameSearchModalComponent } from './components/templates/nav-bar/name-search-modal/name-search-modal.component';
import { ReportNameComponent } from './views/reports/report-name/report-name.component';
import { ReportDateComponent } from './views/reports/report-date/report-date.component';

@NgModule({
    declarations: [
    AppComponent,
    HomeComponent,
    ReportsComponent,
    ProductTableComponent,
    NavBarComponent,
    ProductUpdateComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    HeaderComponent,
    LogoComponent,
    NameSearchModalComponent,
    ReportNameComponent,
    ReportDateComponent
    ],
    entryComponents: [NameSearchModalComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        StoreModule.forRoot({
            productsReducer: fromReducers.reducer
        }),
        EffectsModule.forRoot([ProductsEffects]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
