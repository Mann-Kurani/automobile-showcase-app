import { Component, OnInit } from '@angular/core'; // ✅ Import OnInit
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service'; // ✅ Import ApiService
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule


@Component({
  standalone: true, 
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css'],
  imports: [CommonModule, RouterModule]
})
export class ModelListComponent implements OnInit {
  models: any[] = []; // ✅ Define models property

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('Fetching models...');

    this.apiService.getModels().subscribe({
      next: (data: any) => { // ✅ Explicitly define type
        console.log('API Data:', data);
        this.models = data;
      },
      error: (error: any) => { // ✅ Explicitly define type
        console.error('API Error:', error);
      }
    });
  }
}
