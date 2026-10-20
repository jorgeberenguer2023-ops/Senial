import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'carrito-signals',
    loadComponent: () =>
      import('./carrito-signals/carrito-signals.component').then(
        (m) => m.CarritoSignalsComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'carrito-signals',
    pathMatch: 'full',
  },
];
