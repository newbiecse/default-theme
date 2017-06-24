import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  constructor(private router: Router){}

  @Input() product: number;
}