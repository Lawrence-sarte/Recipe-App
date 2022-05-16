import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
const initialFormState = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: "",
}

const [formData, setFormData] = useState({ ...initialFormState });

const submitHandler = (e) => {
  e.preventDefault();
  addRecipe(formData);
  setFormData({...initialFormState});
};

const changeHandler = ({target}) => {
  setFormData({
...formData,
[target.name]: target.value
  });
};

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" onChange={changeHandler} value={formData.name} placeholder="Name" required />
            </td>
            <td>
              <input id="cuisine" name="cuisine" onChange={changeHandler} value={formData.cuisine} placeholder="Cuisine" required />
            </td>
            <td>
              <input type="url" id="photo" name="photo" onChange={changeHandler} value={formData.photo} placeholder="URL" required />
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" onChange={changeHandler} value={formData.ingredients} placeholder="Ingredients" required />
            </td>
            <td>
              <textarea id="preparation" name="preparation" onChange={changeHandler} value={formData.preparation} placeholder="Preparation" required />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
