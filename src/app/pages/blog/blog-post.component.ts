import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html'
})
export class BlogPostComponent {
  @Input() post: number;
}