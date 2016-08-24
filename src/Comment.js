import React, { Component } from 'react';
import Remarkable from 'remarkable';

class Comment extends Component {
    rawMarkup(){
        var md = new Remarkable();
        var str = md.render(this.props.children.toString()); 
        return { __html: str };
    }
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={ this.rawMarkup() } />
            </div>
        );
    }
}

export default Comment;