import React, { Component } from 'react';

export default class Comment extends Component {
  state = {};

  render() {
    const { comment } = this.props;

    return (
      <div className="comment" id={comment._id}>
        <h2>{comment.title}</h2>
        <h3>by {comment.author} on {new Date(comment.date).toLocaleString()}</h3>
        <div>{comment.content}</div>
      </div>
    );
  }
}