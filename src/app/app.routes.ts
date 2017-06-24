import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsPageComponent } from './pages/products/products-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

export const ROUTES : Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'products',
    pathMatch: 'full',
    // canActivate: [AuthGuard],
    component: ProductsPageComponent
  },
  {
    path: 'contact',
    pathMatch: 'full',
    // canActivate: [AuthGuard],
    component: ContactComponent
  }, 
  {
    path: 'blog',
    pathMatch: 'full',
    // canActivate: [AuthGuard],
    component: BlogComponent
  }
];