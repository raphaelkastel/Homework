import React, { Component } from "react";
import $ from "jquery";
import Blog from "./Blog.js";
let blogElements = [];
export default class BlogList extends Component {
  state = {
    blogElements: []
  }
  
  showBlogList() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load blog list");
        }
        return response.json();
      })
      .then(blogs => {
        this.setState({
          blogElements: blogs
        });
        return this.state.blogElements;
      })
      .catch(err => console.error(err));
  }

  render() {
    this.showBlogList();
    return (
      <>
      
        <div>
    {this.state.blogElements.map((blog, i) => <Blog blog={blog} key={i} setBlog = {this.props.setBlog} />)}
        </div>
      </>
    );
  }
}

