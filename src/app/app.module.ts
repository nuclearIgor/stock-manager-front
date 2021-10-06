import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProductTableComponent } from './components/product/product-table/product-table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import { ProductUpdateComponent } from './components/modals/product-update/product-update.component';
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog'

import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { ProductCreateComponent } from './components/modals/product-create/product-create.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {StoreModule} from "@ngrx/store";
import * as fromReducers from "./store/reducers";
import {EffectsModule} from '@ngrx/effects'
import {ProductsEffects} from "./store/effects";
import { LogoComponent } from './components/logo/logo.component';
import { NameSearchModalComponent } from './components/modals/name-search-modal/name-search-modal.component';
import { ReportNameComponent } from './components/views/reports/report-name/report-name.component';
import { ReportDateComponent } from './components/views/reports/report-date/report-date.component';
import { ProductComponent } from './components/views/product/product.component';
import {MatIconModule} from "@angular/material/icon";
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';
import { DateSearchModalComponent } from './components/modals/date-search-modal/date-search-modal.component';

@NgModule({
    declarations: [
    AppComponent,
    HomeComponent,
    ProductTableComponent,
    NavBarComponent,
    ProductUpdateComponent,
    ProductCreateComponent,
    LogoComponent,
    NameSearchModalComponent,
    ReportNameComponent,
    ReportDateComponent,
    ProductComponent,
    DeleteModalComponent,
    DateSearchModalComponent
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
        MatSidenavModule,
        StoreModule.forRoot({
            productsReducer: fromReducers.reducer
        }),
        EffectsModule.forRoot([ProductsEffects]),
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
