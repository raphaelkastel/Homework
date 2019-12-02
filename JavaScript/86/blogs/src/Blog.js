import React, { Component } from 'react';
import Post from './Post';

const NUM_POSTS = 3;

export default class Blog extends Component {
    state = {
        posts: [],
        postIndex: 0,
        loading: false,
        error: null
    };

   
    componentDidMount() {
        this.fetchPosts();
    }

    componentDidUpdate(oldprops) {
        if (oldprops.match.params.it !== this.props.match.params.it) {
            this.fetchPosts();
        }
    }
    

    fetchPosts() {
           
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.it}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to load posts for ${this.props.match.params.it}`);
                    }
                    return response.json();
                })
                .then(posts => {
                    this.setState({
                        posts: posts,
                        posted: true
                    });
                })
                .catch(err => {
                    console.error(err);
                    
                });
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to load posts for ${this.props.match.params.it}`);
                    }
                    return response.json();
                })
                .then(user => {
                  let users = user.find(user => {
                        return user.id == +this.props.match.params.it;
                      });
                    this.setState({
                        username: users.name
                    });
                })
                .catch(err => {
                    console.error(err);
                });
            }
                
        
    

    handlePrevious = () => {
        this.setState({
            postIndex: this.state.postIndex - NUM_POSTS
        });
    }

    handleNext = () => {
        this.setState({
            postIndex: this.state.postIndex + NUM_POSTS
        });
    }

    render() {
        //this.fetchPosts();
        
        const { loading, error, posts, postIndex } = this.state;

        if (loading) {
            return <h4 className="loading">loading... </h4>;
        }
        if (error) {
            return <h4 className="error">{error}</h4>
        }

        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{this.state.username}'s Blog</h2>
                {posts
                    .slice(postIndex, postIndex + NUM_POSTS)
                    .map(post => <Post key={post.id} post={post} />)}
                <button disabled={postIndex === 0} onClick={this.handlePrevious}>prev</button>
                <button disabled={postIndex > posts.length - NUM_POSTS} className="next" onClick={this.handleNext}>next</button>
            </div>
        );
    }
}
//