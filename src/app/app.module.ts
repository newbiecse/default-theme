import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, NoPreloading } from '@angular/router';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { BannerComponent } from './pages/home/banner.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CartComponent } from './headers/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './footers/footer.component';
import { HeaderComponent } from './headers/header.component';
import { LogoComponent } from './headers/logo.component';
import { MenuProductComponent } from './pages/home/menu-product.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { NewArticleComponent } from './pages/home/new-article.component';
import { NewArticleListComponent } from './pages/home/new-article-list.component';
import { ProductComponent } from './pages/home/product.component';
import { ProductListComponent } from './pages/home/product-list.component';
import { ProductsPageComponent } from './pages/products/products-page.component';
import { ProductFilterComponent } from './pages/products/product-filter.component';
import { ProductListFullComponent } from './pages/products/product-list-full.component';
import { SearchComponent } from './headers/search.component';
import { SocialComponent } from './headers/social.component';
import { SupportsComponent } from './pages/home/supports.component';
import { TopBarComponent } from './headers/top-bar.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BlogComponent,
    CartComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MenuProductComponent,
    LogoComponent,
    NavBarComponent,
    NewArticleComponent,
    NewArticleListComponent,
    ProductComponent,
    ProductListComponent,
    ProductsPageComponent,
    ProductFilterComponent,
    ProductListFullComponent,
    SearchComponent,
    SocialComponent,
    SupportsComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: NoPreloading }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }