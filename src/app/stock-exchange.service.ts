import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockExchange } from './stock-exchange';

@Injectable({
  providedIn: 'root'
})

export class StockExchangeService {
  private baseUrl = 'http://localhost:8086/api/stockexchange';
  constructor(private http: HttpClient) { }
  getStockExchangeList(): Observable<StockExchange[]>{
    return this.http.get<StockExchange[]>(`${this.baseUrl}`);
  }

  addStockExchange(stockExchange : StockExchange): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, stockExchange);
  }

  getStockExchangeById(id :number): Observable<StockExchange>{
    return this.http.get<StockExchange>(`${this.baseUrl}/${id}`);
  }

  updateStockExchange(id:number , stockExchange: StockExchange) : Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,stockExchange);
  }

  deletetockExchangeById(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}



