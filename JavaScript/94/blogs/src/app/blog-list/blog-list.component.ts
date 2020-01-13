import { Component, OnInit /*, OnDestroy*/ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogServerProps, Blog } from '../shared/blog';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit/*, OnDestroy*/ {
  // blogs: Blog[];
  // private subscription: Subscription;

  blogs: Observable<Blog[]>;

  constructor(/*private httpClient: HttpClient*/ private blogService: BlogService) { }

  ngOnInit() {
    /*this.subscription = this.httpClient.get<BlogServerProps[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        blogs => this.blogs = blogs.map(blog => ({
          id: blog.id,
          name: blog.name,
          website: blog.website,
          company: blog.company.name
        })),
        error => {
          console.error('Observer got error');
          console.error(error);
        });*/

    /*this.blogs = this.httpClient.get<BlogServerProps[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map(blogs =>
        blogs.map(blog => ({
          id: blog.id,
          name: blog.name,
          website: blog.website,
          company: blog.company.name
        }))));*/

    this.blogs = this.blogService.getBlogs();
  }

  /*ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }*/
}
