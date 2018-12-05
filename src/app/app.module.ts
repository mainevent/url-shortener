import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UrlListComponent } from './url-list/url-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlListService } from './services/url-list.service';
import { AppEditCellComponent } from './url-list/edit-cell.component';
import { RouterModule } from '@angular/router';
import { ShortUrlInterceptor } from './interceptors/short-url.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UrlListComponent,
    AppEditCellComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: ':shortLink',
        component: UrlListComponent,
        canActivate: [ShortUrlInterceptor],
      },
      {
        path: '',
        component: UrlListComponent,
        canActivate: [ShortUrlInterceptor],
      }
    ])
  ],
  providers: [ UrlListService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
