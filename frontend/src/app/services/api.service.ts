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

  // getModels(): Observable<Model[]> {
  //   console.log('Calling API:', `${this.apiUrl}/models`);

  //   return this.http.get<Model[]>(`${this.apiUrl}/models`).pipe(
  //     tap(() => console.log('Successfully fetched models')),
  //     catchError(this.handleError)
  //   );
  // }

  getModels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/models`);
  }
  
  getModelDetails(modelId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/models/${modelId}`);
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
