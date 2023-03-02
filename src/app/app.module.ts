import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ImoComponent } from './sites/imo/imo.component';
import { HomeComponent } from './sites/home/home.component';
import { CompanyComponent } from './sites/company/company.component';
import { ContactComponent } from './sites/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ImoComponent,
    HomeComponent,
    CompanyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
