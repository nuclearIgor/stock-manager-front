import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../../services/search.service";
import {NgForm} from '@angular/forms'
import {Router} from "@angular/router";

@Component({
  selector: 'app-name-search-modal',
  templateUrl: './name-search-modal.component.html',
  styleUrls: ['./name-search-modal.component.scss']
})
export class NameSearchModalComponent implements OnInit {

  query: string;

  constructor(private querySearch: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.querySearch.currentQuery.subscribe(query => this.query = query)
    this.router.navigate([''])
  }

  changeQuery(queryParam: string){
    this.querySearch.changeQuery(queryParam)
  }

}
