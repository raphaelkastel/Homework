import React, { Component } from 'react';
import './Post.css';
import AddComment from './AddComment';
import Comment from './Comment';

export default class Post extends Component {
  state = {
    comments: this.props.post.comments,
  };

  render() {
    const { post } = this.props;
   
    const comments = this.state.comments ? this.state.comments.map(c => <Comment key={c._id} comment={c} />) : '';

    const addCommentButton = this.state.addingComment ?
      null :
      <button className="addComment" onClick={this.addComment}>add comment</button>;

    const addComment = this.state.addingComment ?
      <AddComment onComplete={this.commentAdded} id={post._id} /> :
      null;

    return (
      <div className="post" id={post._id}>
        <h2>{post.title}</h2>
        <h3>by {post.author} on {new Date(post.date).toLocaleString()}</h3>
        <div>{post.content}</div>

        <div className="comments">
          {comments}
          {addCommentButton}
          {addComment}
        </div>
      </div>
    );
  }

  addComment = () => {
    this.setState({

      addingComment: !this.state.addingComment
    });
  }

  commentComplete = () => {
    this.setState({
      addingComment: false
    });
  }
  commentAdded = (comment) => {
    if(comment){

      let comments = []
      if(this.state.comments){
        comments = this.state.comments;
      }
      comments.push(comment);
      
      this.setState({
        comments: comments
      });
  
      console.log(comments);
    }
    this.commentComplete();
  }
}