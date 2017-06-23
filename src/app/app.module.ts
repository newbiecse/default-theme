import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './headers/cart.component';
import { FooterComponent } from './footers/footer.component';
import { HeaderComponent } from './headers/header.component';
import { LogoComponent } from './headers/logo.component';
import { SearchComponent } from './headers/search.component';
import { SocialComponent } from './headers/social.component';
import { TopBarComponent } from './headers/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    SocialComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
