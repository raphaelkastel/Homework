import React from 'react';
import './AppView.css';
import RecipeList from './RecipeList.js'


export default props => {
  return (
    <div>
      <RecipeList {...props} />
    </div>
  );
}


