import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  standalone: true, // ✅ Required for standalone components
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.css'],
  imports: [CommonModule] // ✅ Fix for *ngFor
})
export class ModelDetailsComponent implements OnInit {
  model: any;
  modelId: string = '';
  variants: any[] = [];
  features: any[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) {}

  goBack(): void {
    this.location.back(); // ✅ Navigates back to the previous page
  }

  ngOnInit(): void {
    this.modelId = this.route.snapshot.paramMap.get('id') || '';

    this.apiService.getModelDetails(this.modelId).subscribe({
      next: (data) => {
        console.log('Model Details:', data);
        this.model = data;
        this.variants = data.variants || [];
        this.features = data.features || [];
      },
      error: (error) => {
        console.error('Error fetching model details:', error);
      }
    });
  }
}

