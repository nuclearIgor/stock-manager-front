import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product.model";
import {NgForm} from "@angular/forms";
import {entryType, ProductUpdateComponent} from "../../modals/product-update/product-update.component";
import {MatDialog} from "@angular/material/dialog";
import {DeleteModalComponent} from "../../modals/delete-modal/delete-modal.component";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    options: entryType[] = [
        {value: 'saída', viewValue: 'saída'},
        {value: 'entrada', viewValue: 'entrada'}
    ]


  product: Product;
  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private router: Router,
      public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get("name");
    this.productService.readByName(name).subscribe(
        product => {
          this.product = product
          console.log(product)
        });
  }

    public onSubmit(formData: NgForm): void {
        console.log(formData.value)
        console.log(formData.valid)

        const requestData = {
            entryType: formData.value.type,
            quantity: formData.value.quantity,
            productId: this.product.id,
            productName: formData.value.productName ? formData.value.productName : this.product.productName,
        }

        this.productService.update(this.product.id, requestData).subscribe( () => {
                console.log(requestData)
                this.router.navigate([''])
            }
        )
    };

  openUpdateModal(): void {
      let dialogRef = this.dialog.open(ProductUpdateComponent, {
          data: {
              product: this.product,
              options: this.options,
              onSubmit: this.onSubmit
          }
      })

      dialogRef.afterClosed().subscribe(res => this.onSubmit(res))
  }

  openDeleteModal(): void {
      let dialogRef = this.dialog.open(DeleteModalComponent)

      dialogRef.afterClosed().subscribe((res) => {
          if(res) {
              this.deleteProduct()
          }
      })
  }

    deleteProduct(): void {
        this.productService.delete(this.product.id).subscribe(() => {
            this.router.navigate([''])
        })
    };

}
