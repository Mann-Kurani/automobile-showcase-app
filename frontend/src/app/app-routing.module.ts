import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelListComponent } from './components/model-list/model-list.component';
import { ModelDetailsComponent } from './components/model-details/model-details.component';

const routes: Routes = [
  { path: '', component: ModelListComponent },
  { path: 'model/:id', component: ModelDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
