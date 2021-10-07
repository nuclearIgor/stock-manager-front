import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NameSearchModalComponent} from "../modals/name-search-modal/name-search-modal.component";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {ReportDateComponent} from "../reports/report-date/report-date.component";
import {DateSearchModalComponent} from "../modals/date-search-modal/date-search-modal.component";
import {ProductCreateComponent} from "../modals/product-create/product-create.component";
import {NgForm} from "@angular/forms";
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav
  selected: Date | null;
  constructor(public dialog: MatDialog,
              public router: Router,
              private observer: BreakpointObserver,
              private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches){
        this.sidenav.mode = 'over'
        this.sidenav.close()
      }
      else {
        this.sidenav.mode = 'side'
        this.sidenav.open()
      }
    })
  };


  navigate(): void {
    this.router.navigate([''])
  }

  openDateDialog(): void {
    let dialogRef = this.dialog.open(DateSearchModalComponent)

    dialogRef.afterClosed().subscribe((res: Date) => {
      let day = res.getDate().toString().length === 1 ? `0${res.getDate()}` : res.getDate()
      let month = res.getMonth() < 9 ? `0${res.getMonth()+1}` : res.getMonth()+1
      let year = res.getFullYear()
      console.log(res.getMonth().toString())
      this.router.navigate([`/reports/${year}-${month}-${day}`])
      this.productService.showMessage('Pesquisa realizada')
    })
  }

  openNameDialog(): void {
    let dialogRef = this.dialog.open(NameSearchModalComponent)

    dialogRef.afterClosed().subscribe( (res) => {

      let res2 = res.split(' ')
      let res3 = res2.join('-')

      if(res !== 'noaction') {
      this.router.navigate([`/product/${res3}`])
        this.productService.showMessage('Pesquisa realizada')
      }
    })
  };

  public addProduct(formData: NgForm): void {
    console.log(formData.value)

    let product: Product = {
      productName: '',
      stock: 0,
      inDate: ''
    }

    let inputName = formData.value.productName

    if (inputName.split(' ').length > 1){
      let str = inputName.split(' ')
      product.productName = str.join("-")
    }
    if(inputName.split(' ').length === 1){
      product.productName = formData.value.productName
    }
    product.stock = formData.value.stock
    product.inDate =  new Date().toLocaleDateString('en-us')

    this.productService.create(product).subscribe(() => {
      this.router.navigate([`/product/${product.productName}`])
      this.productService.showMessage('Produto adicionado :)')

    })
  }

  openNewProductDialog(): void {
    let dialogRef = this.dialog.open(ProductCreateComponent, {
      data: {
        onSubmit: this.addProduct
      }
    })

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res.value)
      this.addProduct(res)
    })
  }

}
