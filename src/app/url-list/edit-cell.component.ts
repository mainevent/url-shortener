import {Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-edit-cell',
  template: `<span *ngIf="!edit">{{value}}</span>
  <input class="form-control"
    [(ngModel)]="value" *ngIf="edit" (blur)="edit = false" (change)="onValueChanged(value)">`,
  styles: [':host {cursor: pointer}'],
})
export class AppEditCellComponent {
  @Input() value: string;
  @Output() valueChanged = new EventEmitter();

  edit = false;

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    this.edit = this.element.nativeElement.contains(event.target);
  }

  constructor(private element: ElementRef) {
  }

  onValueChanged(value) {
    this.valueChanged.emit(value);
  }
}
