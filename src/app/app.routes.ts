import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'basic',
    title: 'Pipes Basicos',
        loadComponent: () => import('./pages/basic-page/basic-page.component')
  },
  {
    path: 'numbers',
    title: 'Number Pipes',
    loadComponent: () => import('./pages/Number-page/Number-page.component')
  },
  {
    path: 'uncommon',
    title: 'Pipes no tan comunes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component')
  },
  {
    path: 'custom',
    title: 'Pipes personalizados',
    loadComponent: () => import('./pages/Custom-page/Custom-page.component')
  },
   {
    path: '**',
    redirectTo: 'basic'
   }
];
