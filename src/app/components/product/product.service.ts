import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product.model";
import {map, catchError} from 'rxjs/operators'
import {Entry} from "../../views/reports/entry.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = "http://localhost:8080/products"


  constructor(private http: HttpClient) { }
  
  // read(): Observable<Product[]> {
  //   // @ts-ignore
  //   return this.http.get(`${"http://localhost:8080/products/all"}`).pipe(
  //       map(obj => obj),
  //       catchError(async (e) => console.log(e))
  //   )
  // }
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/all`)
  }


  readById(id: string): Observable<Product> {
    // return this.http.get<Product>(`http://localhost:8080/products/find/${id}`);
    return this.http.get<Product>(`${this.apiUrl}/find/${id}`);
  }

  update(id: number, requestData: Entry): Observable<Product> {
    // return this.http.put<Product>(`http://localhost:8080/products/update/${id}`, requestData)
    return this.http.put<Product>(`${this.apiUrl}/update/${id}`, requestData)
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/new`, product)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`)
  }

  getReportByName(name: string): Observable<Entry[]> {
    return this.http.get<Entry[]>(`http://localhost:8080/entry/name/${name}`)
  }
}

