import { Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface entryType {
  value: string;
  viewValue: string;
}

export interface DialogData {
  product: Product,
  options: entryType[],
  onSubmit: any,
}

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit{

  product: Product
  options: entryType[]
  onSubmit: void

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() {
    this.product = this.data.product
    this.options = this.data.options
    this.onSubmit = this.data.onSubmit
     console.log(this.options)
  }

  disabled: boolean = true;

  toggle(): boolean{
    return this.disabled? this.disabled = false : this.disabled = false;
  }

}
