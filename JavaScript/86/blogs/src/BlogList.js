import React, { Component } from "react";
import BlogInfo from './BlogInfo';

export default class BlogList extends Component {
    state = {
        blogs: null,
        loading: false,
        error: null
    };
    
    
    componentDidMount() {
        this.setState({
            loading: true
        });

        // setTimeout to fake a delay
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to load blog list');
                    }
                    return response.json();
                })
                .then(blogs => {
                    this.setState({
                        //blogs: blogs.map(blog => <h1>{blog.name}</h1>)
                        blogs: blogs,
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
        const { loading, error, blogs } = this.state;

        if (loading) {
            return <h4 className="loading">loading... </h4>;
        }
        if (error) {
            return <h4 className="error">{error}</h4>
        }

        return (
            <>
                {blogs &&
                    blogs.map(blog =>
                        <BlogInfo key={blog.id} blog={blog} onBlogSelected={this.props.onBlogSelected} />)}
            </>
        );
    }
}