import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'http://localhost:8086/api/company/companies';
  constructor(private http: HttpClient) { }
  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/${id}`);
  }
  createCompany(company: Company): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, company);
  }
  updateCompany(id: number, company: Company): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, company);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getCompaniesList(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}`);
  }
}

