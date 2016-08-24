import React, { Component } from 'react';
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Form,
  Button,
  ButtonToolbar
} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      text: ""
    };
    this.onAuthorChange = this.onAuthorChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  onAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  onTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSave() {
    this.props.addComment(this.state.author, this.state.text);
  }
    render(){
        return (
            <Form>
                <FieldGroup
                    id="formControlAuthor"
                    type="text"
                    label="Author"
                    help="Author's name"
                    placeholder="Enter author name"
                    value={this.state.author}
                    onChange={this.onAuthorChange}/>
                  <FieldGroup
                    id="formControlText"
                    componentClass="textarea"
                    label="Comment"
                    help="Comment text"
                    placeholder="Write your comment"
                    onChange={this.onTextChange}/>
                  <ButtonToolbar>
                    <Button bsStyle="primary" onClick={this.handleSave}>Save</Button>
                    <Button bsStyle="danger">Cancel</Button>
                  </ButtonToolbar>
                </Form>
            // <div className="commentForm">
                // This is the comment form!
            // </div>
        )
    }
}

export default CommentForm;
