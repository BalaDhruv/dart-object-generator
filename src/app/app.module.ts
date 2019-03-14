import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ObjectDetailsComponent } from './modules/object-details/object-details.component';
import { MethodsComponent } from './modules/methods/methods.component';
import { ObjectComponent } from './modules/object/object.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    NavbarComponent,
    ObjectDetailsComponent,
    MethodsComponent,
    ObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
