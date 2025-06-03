import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {FormsModule} from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import {provideHttpClient} from '@angular/common/http';
import { ProductFilterPipe } from './pipes/product-filter-pipe';
import { RatingStarsPipe } from './pipes/rating-stars-pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    App,
    ProductsComponent,
    ProductFilterPipe,
    RatingStarsPipe,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      BrowserAnimationsModule
    ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
