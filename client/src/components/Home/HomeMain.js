import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeMain.css";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";

function Main(props) {
  const[UserInput, setUserInput]=useState('')
  const [hide, setHide] = useState("hide");
  
  
  const SearchHandler = (event) => {
    event.preventDefault();
    setHide("recipeBar");
  };
const InputHandler=(event)=>{
  event.preventDefault();
  setUserInput(event.target.value)
}
  return (
    <Fragment>
      <div className="Container">
        <div className="Header">
          <div className="Search">
            <input
              className="Search"
              type="text"
              onChange={InputHandler}
              value={UserInput}
              placeholder="Type here to search"

            ></input>
            <button className="SearchButton" onClick={SearchHandler}>
              Search
            </button>
          </div>
          <div className="Nav">
            <a href="/addRecipe">
              <button className="Add">Add recipe</button>
            </a>
            <a href="/Bookmarks">
              <button className="Bookmark">Cooking Book</button>
            </a>

            <button className="Logout" onClick={props.onLogout}>
              LogOut
            </button>
          </div>
        </div>
        <div className="Content">
          <div className="Recepies">
            <Recipe />
            <Recipe />
            <Recipe />
          </div>
          <div className="Ingridients">
            <div className={hide}>
              <p className={hide}>{"Cooking Time:"}</p>

              <p className={hide}>servings:{"1"}</p>
              <button>+</button>
              <button>-&nbsp; </button>

              <button className="addB">Add bookmark</button>
            </div>
            <Ingredients />
            <Ingredients />
            <Ingredients />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Main;
