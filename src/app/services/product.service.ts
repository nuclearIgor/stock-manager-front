import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {Product} from "../models/product.model";
import {map, catchError} from 'rxjs/operators'
import {Entry} from "../models/entry.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = "http://localhost:8080/products"


  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 2000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Algo deu errado. Tente novamente em alguns minutos', true)
    return EMPTY
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/all`).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e) )
    )
  }

  readByName(name: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/name/${name}`).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e) )
    )
  }

  update(id: number, requestData: Entry): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/update/${id}`, requestData).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e) )
    )
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/new`, product).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e) )
    )
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e) )
    )
  }

  getReportByName(name: string): Observable<Entry[]> {
    return this.http.get<Entry[]>(`http://localhost:8080/entry/name/${name}`).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e) )
    )
  }

  getReportByDate(date: string): Observable<Entry[]> {
    return this.http.get<Entry[]>(`http://localhost:8080/entry/date/${date}`).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e) )
    )
  }
}

