import "./CookBook.css";
import React, { Fragment } from "react";
const Bookmarks = () => {

    const deleteHandler=()=>{
        
    }
  return (
    <Fragment>
      <div className="notes">
        <div className="bookCont">
          <div className="RecipesList">
            <div className="oneRecipe">
              <ul className="results">
                <li className="preview">
                  <a href="{props.id}"
                  >
                    <figure className="preview__fig">
                      <img
                        className="preview_img"
                        src="{props.image}"
                        alt="Test"
                      />
                    </figure>
                    <div className="preview__data">
                      <h4 className="preview__title">Title</h4>
                      <p className="preview__publisher">Publisher</p>

                      <div className="preview__user-generated">
                        {/* <svg className="preview__icon">*/}
                        {/* <use href="/media/icons.svg#icon-user"></use> */}
                        {/*</svg>*/}
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <section>
              <button type="delete" onClick={deleteHandler}> Delete</button>
              </section>
            </div>
          </div>
          <a href="/">
            <button className="Bookmark">Go to Home Page</button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default Bookmarks;
