import { Fragment } from "react";
import "./Ingredients.css";
const Ingredients = () => {
  return (
    <Fragment>
      <ul>
        <li className="recipe__ingredient">
          <div className="recipe__quantity">Ingredient1</div>
          <div className="recipe__description">Description</div>
        </li>
      </ul>
      <div className="recipe__directions">
              <h2 className="heading--2">How to cook it</h2>
              <p className="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span className="recipe__publisher">Publisher</span>.
                Please check out directions at their website.
              </p>
              <a className="btn--small recipe__btn" href="{data.sourceUrl}" target="_blank">
                <span>Directions</span>
                
              </a>
            </div>
          
    </Fragment>
  );
};
export default Ingredients;
