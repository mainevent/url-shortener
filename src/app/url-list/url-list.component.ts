import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { UrlListService } from '../services/url-list.service';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css'],
})
export class UrlListComponent implements OnInit {
  urls = this.urlService.storedUrls;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
    shortLink: new FormControl('', Validators.required),
  });

  constructor(public urlService: UrlListService) { }

  ngOnInit() {
  }

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
