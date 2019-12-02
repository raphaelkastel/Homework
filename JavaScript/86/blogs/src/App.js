import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogList from "./BlogList";
import Blog from "./Blog";

export default class App extends Component {
  state = {
    selectedBlog: null
  };


  handleBlogSelected = blog => {
    this.setState({
      selectedBlog: blog,
    });
  };

  handleGoHome = () => {
    this.setState({
      selectedBlog: null
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header onGoHome={this.handleGoHome} />
          <hr />
         
            <Route 
              path="/"
              render={routeProps => (
                <BlogList setBlog = {this.setBlog}
                  onBlogSelected={this.handleBlogSelected}
                  {...routeProps}
                />
              )}
            />
            <Route
              path="/blog/:it"
              render={routeProps => (
                <Blog 
                  { ...routeProps}
                />
              )}
            />

       
        </div>
      </BrowserRouter>
    );
  }
}
//{this.state.selectedBlog && <Blog blog={this.state.selectedBlog} />}
