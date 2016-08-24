import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm addComment={this.props.addComment}/>
            </div>
        );
    }
}

export default CommentBox;
