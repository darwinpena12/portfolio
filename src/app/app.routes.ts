import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { About } from './pages/about/about';
import { Resume } from './pages/resume/resume';
import { Projects } from './pages/projects/projects';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'about', component: About },
  { path: 'resume', component: Resume },
  { path: 'projects', component: Projects },
  { path: '**', component: NotFound }
];