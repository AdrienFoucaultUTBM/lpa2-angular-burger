import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BurgersComponent } from './burgers/burgers.component';
import { BurgersService } from './typescript-angular-client-generated/api/burgers.service'

import { ApiModule } from './typescript-angular-client-generated';
import { HttpClientModule } from '@angular/common/http';
import { BurgersViewComponent } from './burgers-view/burgers-view.component';


@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent,
    BurgersViewComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [
    BurgersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
