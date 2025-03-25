import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // ✅ Required for standalone components
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.css'],
  imports: [CommonModule] // ✅ Fix for *ngFor
})
export class ModelDetailsComponent {
  model = {
    name: 'Tesla Model S',
    brand: 'Tesla',
    description: 'Luxury electric sedan with autopilot.',
    variants: [
      { name: 'Long Range', price: 79999 },
      { name: 'Plaid', price: 119990 }
    ]
  };
}
