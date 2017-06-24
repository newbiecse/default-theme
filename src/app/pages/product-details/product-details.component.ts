import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute){}

  id: number;

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
  }
}