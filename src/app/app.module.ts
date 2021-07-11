import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './AuthComponent/login/login.component';
import {RegisterComponent} from './AuthComponent/register/register.component';
import {SecureComponent} from './Pages/secure/secure.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { MaterialModule } from './material.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { HeaderComponent } from './layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SecureComponent,
    NotFoundComponent,
    LayoutsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
