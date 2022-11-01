import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { CharactersPageComponent } from './page/characters-page/characters-page.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    ContactPageComponent,
    PaginationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
