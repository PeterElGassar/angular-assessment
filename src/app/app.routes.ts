import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import(
        './features/components/layout-wrapper/layout-wrapper.component'
      ).then((c) => c.LayoutWrapperComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/components/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
