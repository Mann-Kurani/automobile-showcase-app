import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelListComponent } from './components/model-list/model-list.component';
import { VariantDetailsComponent } from './components/variant-details/variant-details.component';

const routes: Routes = [
  { path: '', component: ModelListComponent },
  { path: 'model/:modelId/variant/:variantId', component: VariantDetailsComponent } // ✅ Route for Variant Details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
