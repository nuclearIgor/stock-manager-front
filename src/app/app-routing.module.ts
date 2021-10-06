import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {ReportsComponent} from "./views/reports/reports.component";
import {ProductUpdateComponent} from "./components/product/product-update/product-update.component";
import {ProductCreateComponent} from "./components/product/product-create/product-create.component";
import {ProductDeleteComponent} from "./components/product/product-delete/product-delete.component";
import {ReportNameComponent} from "./views/reports/report-name/report-name.component";
import {ProductComponent} from "./views/product/product.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'relatorios',
    component: ReportsComponent
  },
  {
    path: 'products/update/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'product/new',
    component: ProductCreateComponent
  },
  {
    path: 'products/delete/:id',
    component: ProductDeleteComponent
  },
  {
    path: 'relatorios/:name',
    component: ReportNameComponent
  },
  {
    path: 'product/:name',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
