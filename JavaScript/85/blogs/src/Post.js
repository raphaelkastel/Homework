import React, { Component } from "react";

const numPostsToShow = 3;
export default class Posts extends Component {

  render() {
   return  <div class="post">
    <div class="title">{this.props.post.title} [{this.props.post.id}]</div>
    <div class="body">{this.props.post.body}</div>
  </div>;
  }
}
