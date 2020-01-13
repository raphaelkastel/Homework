import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "../shared/blog.service";
import { Post } from "../shared/post";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  posts: Post[];
  NUM_POSTS = 3;
  postIndex = 0;
  slicedPosts: Post[];
  constructor(private route: ActivatedRoute, private blogService: BlogService) {  }
  handlePrevious = () => {
    this.postIndex = this.postIndex - this.NUM_POSTS;
    this.slicedPosts = this.posts.slice(this.postIndex, this.postIndex + this.NUM_POSTS)
  };

  handleNext = () => {
    this.postIndex = this.postIndex + this.NUM_POSTS;
    this.slicedPosts = this.posts.slice(this.postIndex, this.postIndex + this.NUM_POSTS)
  };

  ngOnInit() {
    // since component not reused we can use snapshot not rxjs observable
    const blogId = this.route.snapshot.paramMap.get("blogId");
    this.blogService.getPosts(blogId).subscribe(posts => {
      this.posts = posts;
      this.slicedPosts = this.posts.slice(this.postIndex, this.postIndex + this.NUM_POSTS)
    });
    
  }
}
