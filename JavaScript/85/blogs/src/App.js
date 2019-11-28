import React, { Component } from 'react';
import Posts from './PostList';
import BlogList from './BlogLists';
import { Redirect, Route, Switch } from 'react-router-dom';


export default class App extends Component {
  state = {
    selectedBlog: null,
  }

  setBlog(blog){
    if(blog){
    this.setState({
      selectedBlog: blog
    });
  }
  }
  render() {
   
    return (
      <div className="container">
        <div>
          <BlogList setBlog = {this.setBlog.bind(this)}/>
          <Posts blog = {this.state.selectedBlog}/>
        </div>
      </div>
    );
  }
}

