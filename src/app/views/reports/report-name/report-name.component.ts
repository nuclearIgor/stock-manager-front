import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../components/product/product.service";
import {Entry} from "../entry.model";

@Component({
  selector: 'app-report-name',
  templateUrl: './report-name.component.html',
  styleUrls: ['./report-name.component.scss']
})
export class ReportNameComponent implements OnInit {

  results: Entry[]
  displayedColumns = ['productName', 'date', 'entryType', 'quantity']
  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
  ) { }

  ngOnInit(): void {
  const name = this.route.snapshot.paramMap.get("name")
    this.productService.getReportByName(name).subscribe((entrys) => {

      this.results = entrys
      console.log(entrys)
    })
  }

}
