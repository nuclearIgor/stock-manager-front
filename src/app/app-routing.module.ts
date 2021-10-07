import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/views/home/home.component";
import {ProductUpdateComponent} from "./components/modals/product-update/product-update.component";
import {ProductCreateComponent} from "./components/modals/product-create/product-create.component";
import {ProductComponent} from "./components/views/product/product.component";
import {ReportDateComponent} from "./components/reports/report-date/report-date.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'product/:name',
    component: ProductComponent
  },
  {
    path: 'reports/:date',
    component: ReportDateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
