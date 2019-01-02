import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestsComponent } from './components/requests/requests.component';
import { RequestDetailComponent } from './components/requests/request-detail/request-detail.component';
import { RequestNewComponent } from './components/request-new/request-new.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    RequestDetailComponent,
    RequestNewComponent,
    DepartmentsComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
