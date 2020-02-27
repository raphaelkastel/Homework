import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Posts from './Posts';
import AddPost from './AddPost';
import Header from './Header';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/addPost" exact component={AddPost} />
        <Route render={props => <div className="error">404. No such page</div>} />
      </Switch>
    </>
  );
}

export default App;
