import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Recipe.css";
const Recepies = (props) => {
  return (
    <Fragment>
      <ul className="results" data-id={props.id}>
        <li className="preview">
          <NavLink to="" className="preview__link preview__link--active">
            <figure className="preview__fig">
              <img className="preview_img" src={props.image} alt="Test" />
            </figure>
            <div className="preview__data">
              <h4 className="preview__title">{props.title}</h4>
              <p className="preview__publisher">{props.publisher}</p>

              <div className="preview__user-generated">
                {/* <svg className="preview__icon">*/}
                {/* <use href="/media/icons.svg#icon-user"></use> */}
                {/*</svg>*/}
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};
export default Recepies;
