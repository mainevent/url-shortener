import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppEditCellComponent } from './components/edit-cell/edit-cell.component';
import { AddUrlFormComponent } from './components/add-url-form/add-url-form.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ShortUrlsComponent } from './pages/short-urls/short-urls.component';
import { UrlListComponent } from './components/url-list/url-list.component';

import { UrlListService } from './services/url-list.service';
import { ShortUrlInterceptor } from './interceptors/short-url.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AppEditCellComponent,
    AddUrlFormComponent,
    NotFoundPageComponent,
    ShortUrlsComponent,
    UrlListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: ':shortLink',
        component: NotFoundPageComponent,
        canActivate: [ ShortUrlInterceptor ],
      },
      {
        path: '',
        component: ShortUrlsComponent,
        canActivate: [ ShortUrlInterceptor ],
      },
    ])
  ],
  providers: [ UrlListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
