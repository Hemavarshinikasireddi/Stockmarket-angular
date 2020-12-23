import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPODetails } from './ipo-details';
@Injectable({
  providedIn: 'root'
})
export class IpoDetailsService {
  private baseUrl = 'http://localhost:8086/api/ipodetails/ipo';
  constructor(private http: HttpClient) { }
  getIpoList(): Observable<IPODetails[]>{
    return this.http.get<IPODetails[]>(`${this.baseUrl}`);
  }

  addIpo(ipo :IPODetails): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, ipo);
  }

  getIpoById(id :number): Observable<IPODetails>{
    return this.http.get<IPODetails>(`${this.baseUrl}/${id}`);
  }

  updateIpo(id:number , ipo: IPODetails) :Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,ipo);
  }

  deleteIpoById(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}



