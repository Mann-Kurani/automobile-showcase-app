import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ModelListComponent } from './components/model-list/model-list.component';
import { ModelDetailsComponent } from './components/model-details/model-details.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    CommonModule
  ],
  providers: [importProvidersFrom(ModelListComponent, ModelDetailsComponent)], // ✅ Import standalone components
  bootstrap: [ModelListComponent]
})
export class AppModule {}
