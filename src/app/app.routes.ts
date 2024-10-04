import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import(
        './features/components/layout-wrapper/layout-wrapper.component'
      ).then((c) => c.LayoutWrapperComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/components/products/products.component').then(
            (c) => c.ProductsComponent
          ),
      },
    ],
  },
  {
    path: 'orders',
    loadComponent: () =>
      import(
        './features/components/layout-wrapper/layout-wrapper.component'
      ).then((c) => c.LayoutWrapperComponent),
    children: [
      {
        path: 'orders',
        loadComponent: () =>
          import('./features/components/orders/orders.component').then(
            (c) => c.OrdersComponent
          ),
      },
      {
        path: 'order-details:id',
        loadComponent: () =>
          import(
            './features/components/order-details/order-details.component'
          ).then((c) => c.OrderDetailsComponent),
      },
    ],
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
