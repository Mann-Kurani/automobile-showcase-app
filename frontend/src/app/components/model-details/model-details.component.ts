import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-model-details',
  standalone: true, // ✅ Ensure it's standalone
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.css'],
  imports: [CommonModule, RouterModule] // ✅ Add CommonModule for `*ngIf`, `*ngFor`
})
export class ModelDetailsComponent implements OnInit {
  modelId: string | null = null;
  model: any;
  variants: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.modelId = this.route.snapshot.paramMap.get('modelId');
    if (this.modelId) {
      this.apiService.getModelDetails(this.modelId).subscribe({
        next: (data: any) => { // ✅ Explicit type added
          console.log('Model Data:', data);
          this.model = data;
          this.variants = data.variants || []; // ✅ Ensure `variants` exists
        },
        error: (error: any) => {
          console.error('Error fetching model details:', error);
        }
      });
    }
  }

  goBack(): void {
    history.back(); // ✅ Fix missing `goBack()` method
  }
}
