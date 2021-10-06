import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../product/product.service";
import {Entry} from "../entry.model";

@Component({
  selector: 'app-report-date',
  templateUrl: './report-date.component.html',
  styleUrls: ['./report-date.component.scss']
})
export class ReportDateComponent implements OnInit {

  results: Entry[]
  displayedColumns = ['productName', 'entryType', 'quantity', 'date']

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    const date = this.route.snapshot.paramMap.get("date")
    this.productService.getReportByDate(date).subscribe((entrys) => {
      this.results = entrys
      console.log(entrys)
      console.log(this.results)
    });
  };

};