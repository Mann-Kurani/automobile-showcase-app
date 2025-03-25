import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // ✅ Backend URL

  constructor(private http: HttpClient) {}

  getModels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/models`);
  }

  getModelDetails(modelId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/models/${modelId}`);
  }

  getVariant(variantId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/variants/${variantId}`);
  }
}
