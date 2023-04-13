import { Fragment } from "react";
import { useParams } from "react-router-dom";
import "./Ingredients.css";
const Ingredients = (props) => {
  console.log(props.recipe.title);
  if (!props.recipe) {
    return (
      <h1 style={{ color: "black", fontSize: "20px" }}>
        Selec recipe to see details
      </h1>
    );
  } else {
    return (
      <Fragment>
        <ul>
          <li className="recipe__ingredient">
            <div className="recipe__quantity"></div>
            <div className="recipe__description">{props.recipe.title}</div>
          </li>
        </ul>
        <div className="recipe__directions">
          <h2 className="heading--2">How to cook it</h2>
          <p className="recipe__directions-text">
            This recipe was carefully designed and tested by&nbsp;
            <span className="recipe__publisher">{props.recipe.publisher}</span>.
            Please check out directions at their website.
          </p>
          <a
            className="btn--small recipe__btn"
            href={props.recipe.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Directions</span>
          </a>
        </div>
      </Fragment>
    );
  }
};
export default Ingredients;
