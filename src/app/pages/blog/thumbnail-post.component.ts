import { Component, Input } from '@angular/core';

@Component({
  selector: 'thumbnail-post',
  templateUrl: './thumbnail-post.component.html'
})
export class ThumbnailPostComponent {
  @Input() post: number;
}