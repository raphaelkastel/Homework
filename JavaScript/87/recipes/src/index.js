import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import * as serviceWorker from "./serviceWorker";

// temp test
import RecipeActions from "./data/RecipeActions";

ReactDOM.render(<AppContainer />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
RecipeActions.addRecipe({
    id: 2,
    name: "Macaroni",
    ingredients: ["macaroni", "water", "salt"],
    directions: ["add ingredients to pot", "cook for 10 minutes"],
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDVL2DD4me3bX-rWF6DwGsHquSdUW3vkubGTgvfeanC7fg164&s"
  });
RecipeActions.addRecipe({
    id: 1,
    name: "Chulent",
    ingredients: ["meat", "potatoes", "all sorts of beans"],
    directions: ["add ingredients to pot", "cook for many hours"],
    picture: "https://blog.shabbat.com/wp-content/uploads/2015/06/a1.jpg"
  });
