import React, { Component } from "react";

export default class Blog extends Component {
   
    render(){
        return <div className="blog" onClick = {() => {this.props.setBlog(this.props.blog)}}>
        <div className="title">{this.props.blog.name}</div>
        <div className="website">{this.props.blog.website}</div>
        <div className="company">
            <div>{this.props.blog.company.name}</div>
            <div>{this.props.blog.company.catchPhrase}</div>
            <div>{this.props.blog.company.bs}</div>
        </div>
      </div>
    }
}