import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import this

@Component({
  standalone: true,
  selector: 'app-variant-details',
  templateUrl: './variant-details.component.html',
  styleUrls: ['./variant-details.component.css'],
  imports: [CommonModule, RouterModule]
})
export class VariantDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  
  modelId: string = '';
  modelName: string = ''; // ✅ Store model name
  variants: any[] = [];

  ngOnInit() {
    this.modelId = this.route.snapshot.paramMap.get('id') || '';

    if (this.modelId) {
      this.fetchVariants();
    }
  }

  fetchVariants() {
    this.apiService.getModelById(this.modelId).subscribe({
      next: (model) => {
        this.modelName = model.name || 'Unknown Model'; // ✅ Ensure model name exists
        this.variants = model.variants || [];
      },
      error: (err) => console.error('Error fetching variants:', err)
    });
  }
}
