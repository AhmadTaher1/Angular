import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavBar } from './components/nav-bar/nav-bar';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { Textbox } from './components/textbox/textbox';
import { Filter } from './components/filter/filter';
import { CurrentFilterValues } from './components/current-filter-values/current-filter-values';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    NavBar,
    HeroBanner,
    Textbox,
    Filter,
    CurrentFilterValues,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
