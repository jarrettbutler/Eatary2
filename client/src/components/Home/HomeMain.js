import React, { Fragment, useState } from "react";

import "./HomeMain.css";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";

function Main(props) {
  const [UserInput, setUserInput] = useState("");
  const [hide, setHide] = useState("hide");
  const [SearchRes, SetSearchRes] = useState([]);
  const InputHandler = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };
  const SearchHandler = async (event) => {
    event.preventDefault();
    setHide("");
    const Result = await fetch(`/api/recipes/find?search=${UserInput}`);
    const JsonResult = await Result.json();
    SetSearchRes(JsonResult);
    console.log(JsonResult);
  };

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
              <button className="Bookmark">Cook Book</button>
            </a>

            <button className="Logout" onClick={props.onLogout}>
              LogOut
            </button>
          </div>
        </div>
        <div className="Content">
          <div className="Recepies">
            {SearchRes.map((res, i) => {
              return (
                <Recipe
                  title={res.title}
                  image={res.image}
                  publisher={res.publisher}
                  key={i}
                  id={props.id}
                />
              );
            })}
          </div>
          <div className="Ingridients">
            <div className={hide}>
              <div className="recipeBar">
                <p>{"Cooking Time:"}</p>
                <p>servings:{"1"}</p>
                <button>+</button>
                <button>-&nbsp; </button>
                <button className="addB">Add bookmark</button>
              </div>
              <div>
                <Ingredients />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Main;
