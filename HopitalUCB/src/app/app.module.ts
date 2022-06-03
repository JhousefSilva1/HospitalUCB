import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FootComponent } from './components/foot/foot.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactosComponent } from './components/contactos/contactos.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
     FootComponent,
     NavComponent,
     ContactosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
