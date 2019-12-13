import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Note extends Component {
  state = {
    display: false,
    delete: false,
  };
  handleSelectedNote = () => {
    if (this.state.display === true) {
      this.setState({
        display: false,
        
      });
    } else {
      this.setState({
        display: true,
      });
    }
  }

   delete = () => {
    this.setState({
        delete: true
      });
   }

   edit = () => {
    this.delete();
    this.props.editer(this.props.Note.title,this.props.Note.body)
   }

  render() {
    if (this.state.delete) {
        return null;
    }
    if (this.state.display) {
      return (
        <li>
          <h1 onClick={this.handleSelectedNote}>
            {this.props.Note.title}
            <Button
              className="button"
              variant="light"
              onClick={this.edit}
            >
              Edit
            </Button>
            <Button
              className="button"
              variant="light"
              onClick={this.delete}
            >
              Delete
            </Button>
          </h1>
          <p>{this.props.Note.body}</p>
        </li>
      );
    }

    return (
      <li>
        <h1 onClick={this.handleSelectedNote}>{this.props.Note.title}</h1>
      </li>
    );
  }
}
