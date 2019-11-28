import React, { Component } from "react";
import Post from "./Post";

export default class Posts extends Component {
    state = {
        posts: []
      }

  showPosts(blog) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load posts for ${blog.id}`);
        }
        return response.json();
      })
      .then(postList => {
        this.setState({
            posts: postList
          });
          return this.state.posts;
      })
      .catch(err => console.error(err));
  }
  render() {
      if(this.props.blog){
      this.showPosts(this.props.blog);
    }
    return (
      <div>
        {this.state.posts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </div>
    );
  }
}
