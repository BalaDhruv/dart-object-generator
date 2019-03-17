import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/layout/navbar/navbar.component';
import { ObjectDetailsComponent } from './ui/modules/object-details/object-details.component';
import { MethodsComponent } from './ui/modules/methods/methods.component';
import { ObjectComponent } from './ui/modules/object/object.component';
import { MethodsState } from './store/methods/methods.state';
import { HomeLayoutComponent } from './ui/layout/home-layout/home-layout.component';
import { VariableComponent } from './ui/modules/components/variable/variable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    NavbarComponent,
    ObjectDetailsComponent,
    MethodsComponent,
    ObjectComponent,
    VariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      MethodsState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
