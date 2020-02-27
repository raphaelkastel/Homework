import React, { Component } from 'react'
import Post from './Post';

export default class Posts extends Component {
  state = {
    posts: []
  };

  render() {
    const posts = this.state.posts.map(p => <Post key={p._id} post={p} />);
    return (
      <>
        {posts}
      </>
    );
  }

  async componentDidMount() {
    try {
      const resp = await fetch('http://localhost:3001/posts');
      if (!resp.ok) {
        return console.error(resp.statusText)
      }
      const posts = await resp.json();
      this.setState({
        posts
      });
    } catch (e) {
      console.error(e);
    }
  }
}