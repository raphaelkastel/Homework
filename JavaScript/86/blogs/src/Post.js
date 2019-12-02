import React, { Component } from 'react';
import Comment from './Comment';
import './Post.css';

export default class Post extends Component {
    state = {
        commentsShowing: false,
        loading: false,
        error: null
    };

    toggleComments = () => {
        if (!this.state.comments) {
            this.loadComments();
        }

        this.setState({
            commentsShowing: !this.state.commentsShowing
        });
    };

    loadComments() {
        this.setState({
            loading: true
        });

        // setTimeout to fake a delay
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.post.id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to load comments for post ${this.props.post.id}`);
                    }
                    return response.json();
                })
                .then(comments => {
                    this.setState({
                        comments: comments,
                        loading: false
                    });
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        loading: false,
                        error: err.message ? err.message : 'Failed to load'
                    });
                });
        }, 1000);
    }

    render() {
        let comments;

        const { id, title, body } = this.props.post;
        const { loading, error } = this.state;

        if (loading) {
            comments = <div className="loading comments-status">loading... </div>;
        }
        if (error) {
            comments = <div className="error comments-status">{error}</div>;
        }
        else if (this.state.commentsShowing && this.state.comments) {
            comments = <div className="comments">
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </div>;
        }

        return (
            <div className="post">
                <div className="title">{title} - {id}</div>
                <div className="body">{body}</div>
                <button onClick={this.toggleComments}>{this.state.commentsShowing ? 'hide' : 'show'} comments</button>
                {comments}
            </div>
        );
    }
}