import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-url-form',
  templateUrl: './add-url-form.component.html',
})
export class AddUrlFormComponent {
  @Input() form: FormGroup;
  @Output() formSubmit = new EventEmitter();

  addUrl(values) {
    this.formSubmit.emit(values);
  }
}
