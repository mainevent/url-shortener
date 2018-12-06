import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlListService {
  predefinedLinks = [
    {
      link: 'http://google.com',
      shortLink: 'ggl',
      name: 'Google'
    },
  ];
  _storedUrls;

  get storedUrls() {
    return this._storedUrls;
  }

  set storedUrls(value: any[]) {
    this._storedUrls = value;
    localStorage.setItem('redirectUrls', JSON.stringify(value));
  }

  constructor() {
    if (!localStorage.getItem('redirectUrls')) {
      localStorage.setItem('redirectUrls', JSON.stringify(this.predefinedLinks));
      this._storedUrls = this.predefinedLinks;
    } else {
      this._storedUrls = JSON.parse(localStorage.getItem('redirectUrls'));
    }
  }
}
