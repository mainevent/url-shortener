import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UrlListService } from '../../services/url-list.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css'],
})

export class UrlListComponent {
  urls = this.urlService.storedUrls;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
    shortLink: new FormControl('', Validators.required),
  });

  constructor(public urlService: UrlListService) {}

  addUrl(values) {
    this.urls.push(values);
    this.urlService.storedUrls = [...this.urls];
    this.form.reset();
  }

  saveChanges() {
    this.urlService.storedUrls = [...this.urls];
  }

  deleteUrl(index) {
    this.urls.splice(index, 1);
    this.urlService.storedUrls = this.urls;
  }
}
