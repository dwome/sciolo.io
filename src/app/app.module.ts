import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BookdetailComponent} from './bookdetail/bookdetail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookdetailcardComponent } from './bookdetailcard/bookdetailcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    BookdetailComponent,
    NavbarComponent,
    BookdetailcardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
