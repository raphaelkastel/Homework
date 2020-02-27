import React, { Component } from 'react'
import './AddComment.css';

export default class AddComment extends Component {
  render() {
    return (
      <div id="addComment">
        <textarea ref="content"></textarea>
        <button onClick={this.addComment}>add comment</button>
        <button onClick={this.complete}>cancel</button>
      </div>
    );
  }

  addComment = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/posts/${this.props.id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: this.refs.content.value })
      }).then((resp) => {
        if (!resp.ok) {
          return console.error(resp.statusText);
        }
        return resp.json();
      })


      this.complete(resp);
    } catch (e) {
      console.error(e);
    }
  }

  complete = (resp) => {
    this.props.onComplete(resp);
  }
}