import RecipeActionTypes from "./RecipeActionTypes";
import RecipeDispatcher from "./RecipeDispatcher";
   //name: text.name,
     // ingredients: text.ingredients,
    //  directions: text.directions,
     // picture: text.picture
const Actions = {
  addRecipe(text) {
    RecipeDispatcher.dispatch({
      type: RecipeActionTypes.ADD_RECIPE,
      id: text.id,
      name: text.name,
      ingredients: text.ingredients,
      directions: text.directions,
      picture: text.picture
    
    
    });
  },
  selectRecipe(recipe) {
    RecipeDispatcher.dispatch({
      type: RecipeActionTypes.SELECT_RECIPE,
      selectedRecipe: recipe
      
    });
  }
};

export default Actions;
