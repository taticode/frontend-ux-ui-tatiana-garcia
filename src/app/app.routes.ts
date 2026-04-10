import { Routes } from '@angular/router';
import { ProjectDetailComponent } from './pages/project-detail/project-detail';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'proyecto/:slug', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' }
];