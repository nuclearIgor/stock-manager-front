import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchQuery = new BehaviorSubject<string>("1")
  currentQuery = this.searchQuery.asObservable()

  constructor() { }

  changeQuery(query: string){
    this.searchQuery.next(query)
  }
}
