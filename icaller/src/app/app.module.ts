import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { ListingService } from './services/listing.service';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { PromiseComponent } from './components/promise/promise.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    ListingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
