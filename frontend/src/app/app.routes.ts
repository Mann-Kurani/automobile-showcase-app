import { Routes } from '@angular/router';
import { ModelListComponent } from './components/model-list/model-list.component';
import { VariantDetailsComponent } from './components/variant-details/variant-details.component';

export const routes: Routes = [
  { path: '', component: ModelListComponent },
  { path: 'model/:id/variants', component: VariantDetailsComponent }, // ✅ Route for variant details
];
