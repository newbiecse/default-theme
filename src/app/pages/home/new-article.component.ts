import { Component, Input } from '@angular/core';

@Component({
  selector: 'new-article',
  templateUrl: './new-article.component.html'
})
export class NewArticleComponent {
  @Input() index: number;
}