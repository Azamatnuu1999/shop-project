import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./modules/main-page/main-page.component').then((m) => m.MainPageComponent)
        }
    },
    {
        path: 'products/:id',
        loadComponent: () => {
            return import('./modules/product-detail/product-detail.component').then((m) => m.ProductDetailComponent)
        }
    }
];
