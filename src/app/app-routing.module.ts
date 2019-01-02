import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './components/requests/requests.component';
import { RequestDetailComponent } from './components/requests/request-detail/request-detail.component';
import { RequestNewComponent } from './components/request-new/request-new.component';

const routes: Routes = [
  {path: '', redirectTo: '/requests', pathMatch: 'full'},
  {path: 'requests', component: RequestsComponent},
  {path: 'requests/:id', component: RequestDetailComponent},
  {path: 'request/new', component: RequestNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
