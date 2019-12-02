import React from 'react';
import './Header.css';

export default props => {
    return (
        <header>
            <h1>PCS Blogs</h1>
            <nav>
                <ul>
                    <li><a href="#" onClick={props.onGoHome}>Blog List</a></li>
                </ul>
            </nav>
        </header>
    );
}