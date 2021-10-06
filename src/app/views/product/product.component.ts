import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../components/product/product.service";
import {Product} from "../../components/product/product.model";
import {NgForm} from "@angular/forms";


interface UpdateType {
    value: string;
    viewValue: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    options: UpdateType[] = [
        {value: 'saída', viewValue: 'saída'},
        {value: 'entrada', viewValue: 'entrada'}
    ]


  product: Product;
  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private router: Router
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
        console.log(formData.value.quantity)
        // console.log(f.valueChanges)
        console.log(formData.valid)

        const requestData = {
            entryType: formData.value.type,
            quantity: formData.value.quantity,
            productId: this.product.id,
            productName: formData.value.productName,
        }

        this.productService.update(this.product.id, requestData).subscribe( () => {
                console.log(requestData)
                this.router.navigate([''])
            }
        )
    };

    deleteProduct(): void {
        this.productService.delete(this.product.id).subscribe(() => {
            this.router.navigate([''])
        })
    };

}
