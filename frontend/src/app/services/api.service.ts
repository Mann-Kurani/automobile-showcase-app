// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private apiUrl = 'http://localhost:3000'; // Base URL of Nest.js Backend

//   constructor(private http: HttpClient) {}

//   // Fetch all models
//   getModels(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/models`);
//   }

//   // Fetch all variants
//   getVariants(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/variants`);
//   }

//   // Fetch all colors
//   getColors(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/colors`);
//   }

//   // Fetch all accessories
//   getAccessories(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/accessories`);
//   }

//   // Fetch all features
//   getFeatures(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/features`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// Define interface for model data
interface Model {
  id: number;
  name: string;
  // Add other model properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    console.log('API Service Initialized!');
  }

  getModels(): Observable<Model[]> {
    console.log('Calling API:', `${this.apiUrl}/models`);

    return this.http.get<Model[]>(`${this.apiUrl}/models`).pipe(
      tap(() => console.log('Successfully fetched models')),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('API Error:', error);

    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned code ${error.status}: ${error.statusText}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}