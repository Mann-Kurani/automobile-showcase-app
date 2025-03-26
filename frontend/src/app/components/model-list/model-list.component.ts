import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-model-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent {
  models: any[] = [];
  selectedModelId: string | null = null; // ✅ Initialize selectedModelId

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getModels().subscribe(data => {
      this.models = data;
    });
  }

  // ✅ Toggle selected model
  toggleDetails(modelId: string) {
    this.selectedModelId = this.selectedModelId === modelId ? null : modelId;
  }
}
