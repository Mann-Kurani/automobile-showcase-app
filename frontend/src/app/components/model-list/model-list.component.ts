import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-model-list',
  standalone: true,
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css'],
  imports: [CommonModule, RouterModule]
})
export class ModelListComponent implements OnInit {
  models: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchModels();
  }

  fetchModels(): void {
    this.apiService.getModels().subscribe({
      next: (data) => {
        console.log('Fetched Models:', data);
        this.models = data; // ✅ Ensure models have variants inside
      },
      error: (error) => {
        console.error('Error fetching models:', error);
      }
    });
  }
}
