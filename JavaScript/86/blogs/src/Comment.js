import React from 'react';
import './Comment.css';

export default props => {
    const { body, name, email } = props.comment;

    return (
        <div className="comment">
            <div>{body}</div>
            <div className="author"><span className="name">{name}</span> {email}</div>
        </div>
    );
}