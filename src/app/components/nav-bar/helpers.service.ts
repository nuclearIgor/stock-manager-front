// import { Injectable } from '@angular/core';
// import {MatDialog} from "@angular/material/dialog";
// import {Router} from "@angular/router";
// import {BreakpointObserver} from "@angular/cdk/layout";
// import {ProductService} from "../product/product.service";
// import {DateSearchModalComponent} from "../modals/date-search-modal/date-search-modal.component";
// import {NameSearchModalComponent} from "../modals/name-search-modal/name-search-modal.component";
// import {NgForm} from "@angular/forms";
// import {Product} from "../product/product.model";
// import {ProductCreateComponent} from "../modals/product-create/product-create.component";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class HelpersService {
//
//   constructor(
//       public dialog: MatDialog,
//       public router: Router,
//       private observer: BreakpointObserver,
//       private productService: ProductService
//   ) { }
//
//   navigate(): void {
//     this.router.navigate([''])
//   }
//
//   openDateDialog(): void {
//     let dialogRef = this.dialog.open(DateSearchModalComponent)
//
//     dialogRef.afterClosed().subscribe((res) => {
//       console.log(res)
//       this.router.navigate([`/reports/${res}`])
//     })
//   }
//
//   openNameDialog(): void {
//     let dialogRef = this.dialog.open(NameSearchModalComponent)
//
//     dialogRef.afterClosed().subscribe( (res) => {
//
//       let res2 = res.split(' ')
//       let res3 = res2.join('-')
//
//       let res4 = res3.split('-')
//       let res5 = res4.join(' ')
//       console.log(`res2: ${res2}, res3: ${res3}, res4: ${res4}, res5: ${res5}`)
//       this.router.navigate([`/product/${res3}`])
//       if(res !== "noaction"){
//       };
//     })
//   };
//
//   public addProduct(formData: NgForm): void {
//     console.log(formData.value)
//
//     let product: Product = {
//       productName: '',
//       stock: 0,
//       inDate: ''
//     }
//
//     let inputName = formData.value.productName
//
//     if (inputName.split(' ').length > 1){
//       let str = inputName.split(' ')
//       product.productName = str.join("-")
//     }
//     if(inputName.split(' ').length === 1){
//       product.productName = formData.value.productName
//     }
//     product.stock = formData.value.stock
//     product.inDate =  new Date().toLocaleDateString('en-us')
//
//     this.productService.create(product).subscribe(() => {
//       this.router.navigate([`/product/${product.productName}`])
//
//     })
//   }
//
//   openNewProductDialog(): void {
//     let dialogRef = this.dialog.open(ProductCreateComponent, {
//       data: {
//         onSubmit: this.addProduct
//       }
//     })
//
//     dialogRef.afterClosed().subscribe((res) => {
//       console.log(res.value)
//       this.addProduct(res)
//     })
//   }
//
//
//
// }