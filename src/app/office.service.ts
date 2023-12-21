import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Office } from './office';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http:HttpClient) { }
  private baseUrl="http://localhost:8080/office";

  alloffice():Observable<Office[]>{
    return this.http.get<Office[]>(`${this.baseUrl}/getall`);
  }
  getoffice(id:number):Observable<Office>{
    return this.http.get<Office>(`${this.baseUrl}/get/${id}`)
  }
  updateOffice(id:number,office:Office):Observable<Office>{
    return this.http.put<Office>(`${this.baseUrl}/update/${id}`,office)
  }
  insertdata(office:Office):Observable<Office>{
    return this.http.post<Office>(`${this.baseUrl}/insertdata`,office)
  }
  deletedata(id:number):Observable<Office>{
return this.http.delete<Office>(`${this.baseUrl}/delete/${id}`)
  }
}

