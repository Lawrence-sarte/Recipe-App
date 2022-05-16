import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  function addRecipe(newRecipeObj){
    setRecipes([...recipes, newRecipeObj])
  }
  
  const deleteRecipe = (event) => {
    const indexToDelete = parseInt(event.target.parentNode.parentNode.id)
    const updatedList = recipes.filter((recipe, index)=>{
      if(index !== indexToDelete){return recipe}})
    setRecipes(updatedList)
  }
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteHandler={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe}/>
      
    </div>
  );
}

export default App;