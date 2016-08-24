import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import CommentBox from './CommentBox';

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
// var nextId = 3;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "comments": data,
        "nextId": 3
    };
    this.addComment = this.addComment.bind(this);
  }

  newId() {
    var id = this.state.nextId;
    this.setState({"nextId": id + 1});
    return id;
  }

  loadData() {
    var id = this.newId();
      var newComment = {
          id: id,
          author: 'Victor Gil',
          text: 'La **concha** de tu *madre*'
      };
    //   this.props.nextId += 1;
      this.state.comments.push(newComment);
    //   this.setState(data);
  }

  addComment(author, text) {
      var id = this.newId();
      var newComment = {
        id: id,
        author: author,
        text: text
      };
      this.state.comments.push(newComment);
  }

  render() {
    return (
      <div className="App container">
        <Button bsStyle="primary" onClick={()=>this.loadData()}>Add new</Button>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <CommentBox
              data={this.state.comments}
              addComment={this.addComment}
              />

          </Col>
        </Row>
        <p>Hey!!</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
