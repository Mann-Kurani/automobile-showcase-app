import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true, // ✅ Required for standalone components
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css'],
  imports: [CommonModule, RouterModule] // ✅ Fix for *ngFor & routerLink
})
export class ModelListComponent {
  models = [
    { _id: '1', name: 'Tesla Model S', brand: 'Tesla' },
    { _id: '2', name: 'BMW X5', brand: 'BMW' }
  ];
}
