import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BurgersComponent } from './burgers/burgers.component';
import { BurgersService } from './typescript-angular-client-generated/api/burgers.service'

import { ApiModule } from './typescript-angular-client-generated';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent,
    BurgerDetailComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [
    BurgersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
