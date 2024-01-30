import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceproduitService {

  private url="http://localhost:8888/API_COMMERCE/api_produit.php";

  constructor(private http: HttpClient) { }

  getProduits(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

}
