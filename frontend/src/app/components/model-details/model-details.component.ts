import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-model-details',
  standalone: true,
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.css'],
  imports: [CommonModule, RouterModule], // ✅ Import CommonModule & RouterModule
})
export class ModelDetailsComponent implements OnInit {
  model: any = {}; // ✅ Store Model Data
  variants: any[] = []; // ✅ Fix: Initialize an empty array for variants
  modelId: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.modelId = this.route.snapshot.paramMap.get('id') || '';
    if (this.modelId) {
      this.fetchModelDetails();
    }
  }

  fetchModelDetails(): void {
    this.apiService.getModelById(this.modelId).subscribe({
      next: (data) => {
        this.model = data;
        this.variants = data.variants || []; // ✅ Ensure variants exist
      },
      error: (error) => {
        console.error('Error fetching model details:', error);
      }
    });
  }

  // ✅ Fix: Add 'goBack()' Method
  goBack(): void {
    window.history.back();
  }
}
