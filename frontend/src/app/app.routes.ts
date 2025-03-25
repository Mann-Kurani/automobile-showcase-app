import { Routes } from '@angular/router';
import { ModelListComponent } from './components/model-list/model-list.component';
import { ModelDetailsComponent } from './components/model-details/model-details.component';

export const routes: Routes = [
  { path: '', component: ModelListComponent },
  { path: 'model/:id', component: ModelDetailsComponent } // ✅ Add this!
];
