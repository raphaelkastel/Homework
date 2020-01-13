import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogServerProps, Blog } from './blog';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.httpClient.get<BlogServerProps[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map(blogs =>
        blogs.map(blog => ({
          id: blog.id,
          name: blog.name,
          website: blog.website,
          company: blog.company.name
        }))));
  }

  getPosts(blogId: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${blogId}`);
  }
}
