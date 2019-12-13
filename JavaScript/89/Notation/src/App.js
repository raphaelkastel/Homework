import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Note from "./Note";
import Noter from "./Noter";
let noteList;
let newNoter

export default class App extends Component {
  state = {
    notes: [],
    title: "",
    body: "",
  };

  handleSelectedNote = () => {};
  
 
  handleNoterInput = (title, body) => {
    let note = {title, body};
    if (this.state.notes) {
      this.setState({
        notes: [...this.state.notes, note]
      });
    }
  };
  editer = (title, body) => {
    if (this.state.notes) {
      this.setState({
        title,
        body,
      });
    }
  };
  clearEdit = () => {
    this.setState({
      title: "",
      body: "",
    })
  }


  render() {
    if (this.state.notes) {
       noteList = (
        <ol className="bulletlessList">
          
          {this.state.notes.sort((a, b) => a.title.localeCompare(b.title)).map((note, index) => (

            <Note Note={note} onChange={this.handleOnChange} editer = {this.editer} key = {index}/>
            
          ))}
        </ol>
      );
    }
      newNoter = <Noter onSubmit={this.handleNoterInput} title = {this.state.title} body = {this.state.body} clear = {this.clearEdit} />

    return (
      <div className="container">
        <Header />
        {newNoter}
        <hr />
        {noteList}
      </div>
    );
  }
}
