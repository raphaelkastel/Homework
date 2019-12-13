import React, { Component } from "react";

export default class Noter extends Component {
  state = {
    title: this.props.title,
    body: this.props.body
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.props.title) {
      this.setState({
        title: nextProps.title,
        body: nextProps.body
      });
    }
  }

  handleNoteTitle = title => {
    this.setState({
      title: title.target.value
    });
  };

  handleNoteBody = body => {
    this.setState({
      body: body.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.title, this.state.body);
    this.setState({
      title: "",
      body: ""
    });
    this.props.clear();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Title</span>
          <input
            type="text"
            className="form-control"
            value={this.state.title}
            onChange={this.handleNoteTitle}
            required
          />
          <br/>
          <span className="input-group-text" id="basic-addon2">Content</span>  
          <textarea
            type="text"
            className="form-control"
            value={this.state.body}
            onChange={this.handleNoteBody}
          />
          <br/>
          <div className="text-center">
            <button className="btn btn-outline-secondary">Add Note</button>
          </div>
        </div>
      </form>
    );
  }
}
