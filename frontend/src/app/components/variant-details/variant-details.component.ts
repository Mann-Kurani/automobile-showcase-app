import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-variant-details',
  templateUrl: './variant-details.component.html',
  styleUrls: ['./variant-details.component.css']
})
export class VariantDetailsComponent implements OnInit {
  variant: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchVariant();
  }

  fetchVariant(): void {
    const variantId = this.route.snapshot.paramMap.get('variantId');
    if (variantId) {
      this.apiService.getVariant(variantId).subscribe({
        next: (data) => {
          console.log('Variant Data:', data);
          this.variant = data;
        },
        error: (error) => {
          console.error('Error fetching variant:', error);
        }
      });
    }
  }
}
