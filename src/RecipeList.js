import React from "react";
import CreateRecipeObj from "./CreateRecipeObj"
function RecipeList({recipes, deleteHandler}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

let recipeArr = recipes.map((recipe, index) => {
  return (<CreateRecipeObj recipe={recipe} index={index} deleteHandler={deleteHandler}/>)
})

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipeArr}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;