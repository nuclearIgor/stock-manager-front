import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../components/templates/nav-bar/search.service";
import {ProductService} from "../../components/product/product.service";
import {Product} from "../../components/product/product.model";
import {ActivatedRoute, Routes} from "@angular/router";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  result: Product
  constructor(private querySearch: SearchService,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("name");
    this.productService.readById(id).subscribe(product => this.result = product)
  }

}
