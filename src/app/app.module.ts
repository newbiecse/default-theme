import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, NoPreloading } from '@angular/router';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { CartComponent } from './headers/cart.component';
import { FooterComponent } from './footers/footer.component';
import { HeaderComponent } from './headers/header.component';
import { LogoComponent } from './headers/logo.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { SearchComponent } from './headers/search.component';
import { SocialComponent } from './headers/social.component';
import { TopBarComponent } from './headers/top-bar.component';
import { HomeComponent } from './pages/home.component';

@NgModule({
  declarations: [
    AppComponent,    
    CartComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LogoComponent,
    NavBarComponent,
    SearchComponent,
    SocialComponent,
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
