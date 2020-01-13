import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/shared/blog';

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.css']
})
export class BlogInfoComponent {
  @Input()
  blog: Blog;
}
