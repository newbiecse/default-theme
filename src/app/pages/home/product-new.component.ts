import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-new',
  templateUrl: './product-new.component.html'
})
export class ProductNewComponent {
  @Input() index: number;
}