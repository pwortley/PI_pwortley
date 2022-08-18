import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { RedesocialesComponent } from './components/redesociales/redesociales.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoAPComponent,
    HeaderComponent,
    BannerComponent,
    RedesocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
