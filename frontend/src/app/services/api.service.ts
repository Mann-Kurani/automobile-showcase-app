// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private baseUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) {}

//   // ✅ Get all models
//   getModels(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.baseUrl}/models`);
//   }

//   // ✅ Get a model by ID (Correct method name)
//   getModelById(id: string): Observable<any> {
//     return this.http.get<any>(`${this.baseUrl}/models/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/models';

  constructor(private http: HttpClient) {}

  getModels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getModelById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
