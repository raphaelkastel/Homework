import React, { Component } from 'react';
export default class AddPost extends Component {
  render() {
    return (
      <div id="addPost">
        <textarea ref="content"></textarea>
        <button onClick={this.addPost}>add post</button>
        <button onClick={event =>  window.location.href='/'}>cancel</button>
      </div>
    );
  }

  addPost = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: this.refs.content.value })
      });

      if (!resp.ok) {
        return console.error(resp.statusText);
      }
      window.location.href='/'
    } catch (e) {
      console.error(e);
    }
  }
}