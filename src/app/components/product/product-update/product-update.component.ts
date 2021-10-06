import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {getLocaleDateFormat} from "@angular/common";

interface UpdateType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit, AfterViewInit {

  product: Product

  options: UpdateType[] = [
    {value: 'saída', viewValue: 'saída'},
    {value: 'entrada', viewValue: 'entrada'}
  ]

  constructor(
      private productService: ProductService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  // ngOnInit(): void {
  //   const name = this.route.snapshot.paramMap.get("name");
  //   this.productService.readByName(name).subscribe(
  //       product => {
  //         this.product = product
  //         console.log(product)
  //         console.log(this.product)
  //       }
  //
  //   )
  // }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id")
    this.productService.readById(id).subscribe(product => {this.product = product
    console.log(product)})
  }

  ngAfterViewInit() {
    const name = this.route.snapshot.paramMap.get("name");
    this.productService.readByName(name).subscribe(
        product => this.product = product)
  }

  public onSubmit(formData: NgForm): void {
    console.log(formData.value.quantity)
    // console.log(f.valueChanges)
    console.log(formData.valid)

    let newStock: number;

    if(formData.value.type == 'saída'){
      newStock = this.product.stock + formData.value.quantity
    }
    if(formData.value.type == 'saída'){
      newStock = this.product.stock - formData.value.quantity
    }

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
  }
}
