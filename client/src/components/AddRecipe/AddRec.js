import React, { Fragment, useState } from "react";
import "./AddRec.css";
const AddRecipe = () => {
  return (
    <Fragment>
      <div className="cont">
        <div className="AddRec ">
          <div className="RecData">
            Recipe Data
            <div className="Title bt">
              <label>Title</label>
              <input type="text" />
            </div>
            <div className="Url bt">
              <label>URL</label>
              <input type="text" />
            </div>
            <div className="ImageUrl bt">
              <label>Image URL</label>
              <input type="text" />
            </div>
            <div className="Publish bt">
              <label>Publisher</label>
              <input type="text" />
            </div>
            <div className="PrepTime bt">
              <label>Preparation Time</label>
              <input type="text" />
            </div>
            <div className="Servings bt">
              <label>Servings</label>
              <input type="text" />
            </div>
          </div>
          <div className="Ingredients">
            Ingredients
            <div className="Ingredient1 bt">
              <label>Ingredient 1</label>
              <input type="text" />
            </div>
            <div className="Ingredient2 bt">
              <label>Ingredient 2</label>
              <input type="text" />
            </div>
            <div className="Ingredient3 bt">
              <label>Ingredient 3</label>
              <input type="text" />
            </div>
            <div className="Ingredients4 bt">
              <label>Publisher</label>
              <input type="text" />
            </div>
            <div className="Ingredient5 bt">
              <label>Preparation Time</label>
              <input type="text" />
            </div>
            <div className="Ingredient6 bt">
              <label>Servings</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div>
        <button className="Upload"> Upload</button>
        <a href="/">
          <button className="Upload">Go to Hope Page</button>
        </a>
      </div>
      </div>
      
    </Fragment>
  );
};
export default AddRecipe;
